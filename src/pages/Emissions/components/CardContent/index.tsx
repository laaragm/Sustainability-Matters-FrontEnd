import { Stack } from "@mui/material";

import { Emission } from "../../../../types/emission";
import {
    StyledDate,
    StyledTitle,
    StyledDescription,
    StyledDivider,
} from "./styles";

interface CardContentProps {
    emissions: { [key: string]: Emission[] };
}

export function CardContent({ emissions }: CardContentProps) {
    console.log(emissions);

    return (
        <Stack
            direction="column"
            spacing={3}
            alignItems="start"
            justifyContent="flex-start"
            width="100%"
        >
            {Object.keys(emissions).map((key, index) => (
                <>
                    <StyledDate key={key}>{key}</StyledDate>
                    <Stack width="100%">
                        {emissions[key].map((emission) => (
                            <Stack
                                key={`${emission.subcategory}-${emission.amount}-${emission.date}`}
                                direction="column"
                                mb={1}
                            >
                                <StyledTitle>
                                    {emission.subcategory?.name}
                                </StyledTitle>
                                <StyledDescription>
                                    {emission.date} - {emission.co2Emission}{" "}
                                    kgCO2eq
                                </StyledDescription>
                                <Stack width="100%" mt={1}>
                                    <StyledDivider />
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </>
            ))}
        </Stack>
    );
}
