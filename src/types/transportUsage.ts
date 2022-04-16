import { Category } from "./category";
import { User } from "./user";

export interface TransportUsage {
    transport: Category;
    distance: number;
    co2Emission: number;
    user: User;
    date: Date;
}
