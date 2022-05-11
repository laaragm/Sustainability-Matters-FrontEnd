import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../services/api";

type BudgetItem = {
    year: number;
    month: number;
    day: number;
};

type GetBudgetItemResponse = {
    totalCount: number;
    budget: BudgetItem[];
};

export async function getBudgetData(): Promise<GetBudgetItemResponse> {
    const response = await api.get("monthemission/UserFullConsumption");
    const data = response?.data;
    const budget: BudgetItem[] = data?.map((item: any) => {
        return {
            // @ts-ignore
            year: item.year,
            month: item.month,
            day: item.day
        };
    });
    const totalCount = budget?.length;

    return { totalCount, budget };
}

export function useBudget(options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["budget"],
        () => getBudgetData(),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetBudgetItemResponse, unknown>;

    return { data, isLoading, isFetching, error };
}