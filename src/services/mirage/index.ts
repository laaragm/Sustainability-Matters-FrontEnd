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

interface Category {
    id: string;
    type: string;
    emissionFactor: number;
}

interface TransportUsage {
    transport: Category;
    distance: number;
    co2Emission: number;
    user: User;
    date: Date;
}

interface FoodConsumption {
    food: Category;
    amount: number;
    co2Emission: number;
    user: User;
    date: Date;
}

interface ElectricityConsumption {
    electricity: Category;
    amount: number;
    co2Emission: number;
    user: User;
    date: Date;
}

function getRandomTransportCategory() {
    const items = Object.values(TransportType);
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function getRandomFoodCategory() {
    const items = Object.values(FoodType);
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

function getRandomElectricityCategory() {
    const items = Object.values(FoodType);
    const item = items[Math.floor(Math.random() * items.length)];
    return item;
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },
        models: {
            transportUsage: Model.extend<Partial<TransportUsage>>({}),
            foodConsumption: Model.extend<Partial<FoodConsumption>>({}),
            electricityConsumption: Model.extend<
                Partial<ElectricityConsumption>
            >({}),
        },
        factories: {
            transportUsage: Factory.extend({
                transport() {
                    const transport: Category = {
                        id: faker.random.uuid(),
                        type: getRandomTransportCategory(),
                        emissionFactor:
                            Math.floor(
                                Math.random() * (10 * 1000 - 1 * 1000) +
                                    1 * 1000
                            ) /
                            (1 * 1000),
                    };
                    return transport;
                },
                distance() {
                    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
                },
                co2Emission() {
                    return Math.floor(Math.random() * (20000 - 100 + 1) + 100);
                },
                user() {
                    const user: User = {
                        id: faker.random.uuid(),
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
            foodConsumption: Factory.extend({
                food() {
                    const food: Category = {
                        id: faker.random.uuid(),
                        type: getRandomFoodCategory(),
                        emissionFactor:
                            Math.floor(
                                Math.random() * (10 * 1000 - 1 * 1000) +
                                    1 * 1000
                            ) /
                            (1 * 1000),
                    };
                    return food;
                },
                amount() {
                    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
                },
                co2Emission() {
                    return Math.floor(Math.random() * (20000 - 100 + 1) + 100);
                },
                user() {
                    const user: User = {
                        id: faker.random.uuid(),
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
            electricityConsumption: Factory.extend({
                electricity() {
                    const electricity: Category = {
                        id: faker.random.uuid(),
                        type: getRandomElectricityCategory(),
                        emissionFactor:
                            Math.floor(
                                Math.random() * (10 * 1000 - 1 * 1000) +
                                    1 * 1000
                            ) /
                            (1 * 1000),
                    };
                    return electricity;
                },
                amount() {
                    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
                },
                co2Emission() {
                    return Math.floor(Math.random() * (20000 - 100 + 1) + 100);
                },
                user() {
                    const user: User = {
                        id: faker.random.uuid(),
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
            server.createList("transportUsage", 200);
            server.createList("foodConsumption", 200);
            server.createList("electricityConsumption", 200);
        },
        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/transport-usage", function (schema, request) {
                const { page = 1, quantityPerPage = 5 } = request.queryParams;
                const total = schema.all("transportUsage").length;
                const offsetStart = (+page - 1) * +quantityPerPage;
                const offsetEnd = offsetStart + +quantityPerPage;
                // @ts-ignore
                const transportUsage = this.serialize(
                    schema.all("transportUsage")
                ).users.slice(offsetStart, offsetEnd);

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { transportUsage }
                );
            });
            this.get("/transport-usage/:id");
            this.post("/transport-usage");
            this.delete("/transport-usage");
            this.put("/transport-usage");

            this.get("/food-consumption", function (schema, request) {
                const { page = 1, quantityPerPage = 5 } = request.queryParams;
                const total = schema.all("foodConsumption").length;
                const offsetStart = (+page - 1) * +quantityPerPage;
                const offsetEnd = offsetStart + +quantityPerPage;
                // @ts-ignore
                const foodConsumption = this.serialize(
                    schema.all("foodConsumption")
                ).users.slice(offsetStart, offsetEnd);

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { foodConsumption }
                );
            });
            this.get("/food-consumption/:id");
            this.post("/food-consumption");
            this.delete("/food-consumption");
            this.put("/food-consumption");

            this.get("/electricity-consumption", function (schema, request) {
                const { page = 1, quantityPerPage = 5 } = request.queryParams;
                const total = schema.all("electricityConsumption").length;
                const offsetStart = (+page - 1) * +quantityPerPage;
                const offsetEnd = offsetStart + +quantityPerPage;
                // @ts-ignore
                const electricityConsumption = this.serialize(
                    schema.all("electricityConsumption")
                ).users.slice(offsetStart, offsetEnd);

                return new Response(
                    200,
                    { "x-total-count": String(total) },
                    { electricityConsumption }
                );
            });
            this.get("/electricity-consumption/:id");
            this.post("/electricity-consumption");
            this.delete("/electricity-consumption");
            this.put("/electricity-consumption");

            this.namespace = "";
            this.passthrough();
        },
    });

    return server;
}
