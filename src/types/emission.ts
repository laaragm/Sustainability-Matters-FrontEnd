import { Subcategory } from "./subcategory";
import { User } from "./user";

export interface Emission {
    subcategory: Subcategory;
    user: User;
    amount: number;
    co2Emission: number;
    date: Date;
}
