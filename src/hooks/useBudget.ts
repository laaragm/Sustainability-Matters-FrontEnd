import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { Budget } from "../types/budget";

type GetBudgetResponse = {
    totalCount: number;
    budget: { [key: string]: Budget[] };
};

export async function getBudget(): Promise<GetBudgetResponse> {
    const response = await api.get("/monthemission/UserFullConsumption");
    const budget = response?.data;
    const totalCount = budget?.length;

    return { budget, totalCount };
}

export function useBudget(options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["budget"],
        () => getBudget(),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetBudgetResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
