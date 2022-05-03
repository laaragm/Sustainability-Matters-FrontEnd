import { CategoryEnum } from "./categoryEnum";

export interface Subcategory {
    id: string;
    name: string;
    emissionFactor: number;
    category: CategoryEnum;
}
