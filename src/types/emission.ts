import { Subcategory } from "./subcategory";

export interface Emission {
    title: string;
    subcategory: Subcategory;
    amount: number;
    co2Emission: number;
    date: string;
}
