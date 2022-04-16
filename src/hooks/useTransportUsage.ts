import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";

import { api } from "../services/api";
import { TransportUsage } from "../types/transportUsage";

type GetTransportUsageResponse = {
    totalCount: number;
    transportUsage: TransportUsage[];
};

export async function getTransportUsage(
    page: number
): Promise<GetTransportUsageResponse> {
    const { data, headers } = await api.get("transport-usage", {
        params: {
            page,
        },
    });
    const totalCount = +headers["x-total-count"];
    const transportUsage: TransportUsage[] = data.transportUsage.map(
        (item: TransportUsage) => {
            return {
                transport: item.transport,
                distance: item.distance,
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

    return { transportUsage, totalCount };
}

export function useTransportUsage(page: number, options: UseQueryOptions) {
    const { data, isLoading, isFetching, error } = useQuery(
        ["transport-usage", page],
        () => getTransportUsage(page),
        // @ts-ignore
        {
            staleTime: 1000 * 15,
            ...options,
        }
    ) as UseQueryResult<GetTransportUsageResponse, unknown>;

    return { data, isLoading, isFetching, error };
}
