import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { Emission } from "../types/emission";

type GetEmissionsResponse = {
    totalCount: number;
    emissions: { [key: string]: Emission[] };
};

export async function getEmissions(): Promise<GetEmissionsResponse> {
    const response = await api.get("monthemission/month");
    const emissions = response?.data;
    console.log("RESPONSE: ", emissions);
    const totalCount = emissions?.length;

    return { emissions, totalCount };
}

export function useEmissions(options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["emissions"],
        () => getEmissions(),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetEmissionsResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
