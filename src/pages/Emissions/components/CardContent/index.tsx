import { Emission } from "../../../../types/emission";

interface CardContentProps {
    emissions: Emission[];
}

export function CardContent({ emissions }: CardContentProps) {
    console.log(emissions);
    return <h1>Hello</h1>;
}
