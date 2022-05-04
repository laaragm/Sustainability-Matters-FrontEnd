import { Subcategory } from "./subcategory";

export interface Emission {
    title: string;
    subcategory: Subcategory;
    amount: number;
    co2: number;
    date: string;
}
