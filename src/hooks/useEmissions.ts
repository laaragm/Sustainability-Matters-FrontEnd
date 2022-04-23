import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { Emission } from "../types/emission";

type GetEmissionsResponse = {
    totalCount: number;
    emissions: { [key: string]: Emission[] };
};

export async function getEmissions(
    page: number
): Promise<GetEmissionsResponse> {
    const { data, headers } = await api.get("emissions", {
        params: {
            page,
        },
    });
    const totalCount = +headers["x-total-count"];
    const result: Emission[] = data.emissions?.map((item: Emission) => {
        return {
            subcategory: item.subcategory,
            amount: item.amount,
            co2Emission: +(
                item.amount * item.subcategory?.emissionFactor
            ).toFixed(3),
            user: item.user,
            date: new Date(item.date).toLocaleDateString("en", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }),
        };
    });
    const emissions = {
        "April 2022": result.slice(0, 3),
        "March 2022": result.slice(3, 6),
        "February 2022": result.slice(6, 9),
    };

    return { emissions, totalCount };
}

export function useEmissions(page: number, options?: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["emissions", page],
        () => getEmissions(page),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetEmissionsResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
