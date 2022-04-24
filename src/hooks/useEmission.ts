import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { Emission } from "../types/emission";

type GetEmissionResponse = {
    totalCount: number;
    emissions: Emission[];
    totalConsumption: number;
    europeanUnionAverage: number;
};

export async function getEmission(page: number): Promise<GetEmissionResponse> {
    const { data, headers } = await api.get("emissions", {
        params: {
            page,
        },
    });
    const totalCount = +headers["x-total-count"];
    const europeanUnionAverage = 2256; // TODO: Think about how we're going to get this information
    let totalConsumption = 0;
    const emissions: Emission[] = data.emissions?.map((item: Emission) => {
        totalConsumption += +(
            item.amount * item.subcategory?.emissionFactor
        ).toFixed(3);
        return {
            subcategory: item.subcategory,
            amount: item.amount,
            co2Emission: totalConsumption,
            user: item.user,
            date: new Date(item.date).toLocaleDateString("en", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }),
        };
    });

    return { emissions, totalCount, totalConsumption, europeanUnionAverage };
}

export function useEmission(page: number, options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["emission", page],
        () => getEmission(page),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetEmissionResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
