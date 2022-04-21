import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { FoodConsumption } from "../types/food/foodConsumption";

type GetFoodConsumptionResponse = {
    totalCount: number;
    foodConsumption: FoodConsumption[];
};

export async function getFoodConsumption(
    page: number
): Promise<GetFoodConsumptionResponse> {
    const { data, headers } = await api.get("food-consumption", {
        params: {
            page,
        },
    });
    const totalCount = +headers["x-total-count"];
    const foodConsumption: FoodConsumption[] = data.foodConsumption.map(
        (item: FoodConsumption) => {
            return {
                food: item.food,
                amount: item.amount,
                co2Emission: item.co2Emission,
                user: item.user,
                date: new Date(item.date).toLocaleDateString("en", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }),
            };
        }
    );

    return { foodConsumption, totalCount };
}

export function useFoodConsumption(page: number, options: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["food-consumption", page],
        () => getFoodConsumption(page),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetFoodConsumptionResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
