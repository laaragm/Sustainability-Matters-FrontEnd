import { Category } from "./category";
import { User } from "./user";

export interface ElectricityConsumption {
    electricity: Category;
    amount: number;
    co2Emission: number;
    user: User;
    date: Date;
}
