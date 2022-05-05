import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { Emission } from "../types/emission";

type GetEmissionResponse = {
    totalCount: number;
    emissions: Emission[];
    totalConsumption: number;
    europeanUnionAverage: number;
};

export async function getEmission(date: string): Promise<GetEmissionResponse> {
    const response = await api.get(`monthemission/specific-date/${date}`);
    const data = response?.data;
    const { emissions, totalConsumption, europeanUnionAverage } = data;
    const totalCount = emissions?.length;

    return { emissions, totalConsumption, europeanUnionAverage, totalCount };
}

export function useEmission(date: string, options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["emission"],
        () => getEmission(date),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetEmissionResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
