import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { ElectricityConsumption } from "../types/electricityConsumption";

type GetElectricityConsumptionResponse = {
    totalCount: number;
    electricityConsumption: ElectricityConsumption[];
};

export async function getElectricityConsumption(
    page: number
): Promise<GetElectricityConsumptionResponse> {
    const { data, headers } = await api.get("electricity-consumption", {
        params: {
            page,
        },
    });
    const totalCount = +headers["x-total-count"];
    const electricityConsumption: ElectricityConsumption[] =
        data.foodConsumption.map((item: ElectricityConsumption) => {
            return {
                electricity: item.electricity,
                amount: item.amount,
                co2Emission: item.co2Emission,
                user: item.user,
                date: new Date(item.date).toLocaleDateString("en", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }),
            };
        });

    return { electricityConsumption, totalCount };
}

export function useElectricityConsumption(
    page: number,
    options: UseQueryOptions
) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["electricity-consumption", page],
        () => getElectricityConsumption(page),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetElectricityConsumptionResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
