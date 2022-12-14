import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { Emission } from "../types/emission";

type GetEmissionsResponse = {
    totalCount: number;
    emissions: { [key: string]: Emission[] };
};

export async function getEmissions(
    token: string
): Promise<GetEmissionsResponse> {
    const response = await api.get("monthemission/month", {
        headers: {
            Authorization: token,
        },
    });
    const emissions = response?.data;
    let count = 0;
    for (const [key, value] of Object.entries(emissions)) {
        // @ts-ignore
        count += value?.length || 0;
    }
    const totalCount = count;

    return { emissions, totalCount };
}

export function useEmissions(token: string, options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["emissions"],
        () => getEmissions(token),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetEmissionsResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
