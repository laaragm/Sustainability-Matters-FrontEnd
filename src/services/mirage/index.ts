import {
    createServer,
    Model,
    Factory,
    Response,
    ActiveModelSerializer,
} from "miragejs";
// @ts-ignore
import faker from "faker";

import { TransportType } from "../../types/transport/transportEnum";
import { FoodType } from "../../types/food/foodEnum";

interface User {
    id: string;
    firstName: string;
    surname: string;
    location: string;
    email: string;
    createdAt: string;
}

enum Category {
    Transport = 1,
    Food = 2,
    Electricity = 3,
}

interface Subcategory {
    id: string;
    name: string;
    emissionFactor: number;
    category: Category;
}

interface Emission {
    subcategory: Subcategory;
    user: User;
    amount: number;
    co2Emission: number;
    date: Date;
}

function getRandomTransportSubcategory() {
    const items = Object.values(TransportType);
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function getRandomFoodSubcategory() {
    const items = Object.values(FoodType);
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function getRandomElectricitySubcategory() {
    const items = Object.values(FoodType);
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function getRandomCategoryData() {
    const items = Object.values(Category).slice(0, 3);
    const item = items[Math.floor(Math.random() * items.length)];
    if (item === "Food") {
        const name = getRandomFoodSubcategory();
        const category = Category.Food;
        return { category, name };
    }
    if (item === "Transport") {
        const name = getRandomTransportSubcategory();
        const category = Category.Transport;
        return { category, name };
    }
    const name = getRandomElectricitySubcategory();
    const category = Category.Electricity;
    return { category, name };
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },
        models: {
            emission: Model.extend<Partial<Emission>>({}),
        },
        factories: {
            emission: Factory.extend({
                subcategory() {
                    const { category, name } = getRandomCategoryData();
                    const subcategory: Subcategory = {
                        id: faker.random.uuid(),
                        name: name,
                        emissionFactor:
                            Math.floor(
                                Math.random() * (10 * 1000 - 1 * 1000) +
                                    1 * 1000
                            ) /
                            (1 * 1000),
                        category: category,
                    };
                    return subcategory;
                },
                amount() {
                    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
                },
                co2Emission() {
                    return Math.floor(Math.random() * (20000 - 100 + 1) + 100);
                },
                user() {
                    const user: User = {
                        id: faker.datatype.uuid(),
                        firstName: faker.name.firstName(),
                        surname: faker.name.lastName(),
                        email: faker.internet.email().toLowerCase(),
                        location: faker.address.city(),
                        createdAt: faker.date.recent(15),
                    };
                    return user;
                },
                date() {
                    return faker.date.recent(90);
                },
            }),
        },
        seeds(server) {
            server.createList("emission", 200);
        },
        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/emissions", function (schema, request) {
                const { page = 1, quantityPerPage = 10 } = request.queryParams;
                const total = schema.all("emission").length;
                const offsetStart = (+page - 1) * +quantityPerPage;
                const offsetEnd = offsetStart + +quantityPerPage;
                // @ts-ignore
                const emissions = this.serialize(
                    schema.all("emission")
                ).emissions.slice(offsetStart, offsetEnd);

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { emissions }
                );
            });
            this.get("/emissions/:id");
            this.post("/emissions");
            this.delete("/emissions");
            this.put("/emissions");

            this.namespace = "";
            this.passthrough();
        },
    });

    return server;
}
