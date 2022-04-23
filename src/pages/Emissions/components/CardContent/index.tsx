import { Stack } from "@mui/material";

import { Emission } from "../../../../types/emission";
import chevronForwardIcon from "../../../../assets/images/chevronForwardIcon.svg";
import {
    StyledDate,
    StyledTitle,
    StyledDescription,
    StyledDivider,
    StyledImage,
} from "./styles";

interface CardContentProps {
    emissions: { [key: string]: Emission[] };
    onMonthClick: (date: Date) => void;
}

export function CardContent({ emissions, onMonthClick }: CardContentProps) {
    console.log(emissions);

    const handleMonth = (date: string) => {
        onMonthClick(new Date(date));
    };

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
                    <Stack direction="row">
                        <StyledDate key={key}>{key}</StyledDate>
                        <Stack mt={1} ml={1}>
                            <StyledImage
                                src={chevronForwardIcon}
                                alt="Chevron forward icon"
                                height="20"
                                width="20"
                                onClick={() => handleMonth(key)}
                            />
                        </Stack>
                    </Stack>
                    <Stack width="100%">
                        {emissions[key].map((emission) => (
                            <Stack
                                key={`${emission.subcategory}-${emission.amount}-${emission.date}`}
                                direction="row"
                            >
                                <Stack direction="column" mb={1} width="100%">
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
                            </Stack>
                        ))}
                    </Stack>
                </>
            ))}
        </Stack>
    );
}
