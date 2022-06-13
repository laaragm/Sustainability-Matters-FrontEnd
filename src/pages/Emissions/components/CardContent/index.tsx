import { Stack } from "@mui/material";

import { Emission } from "../../../../types/emission";
import chevronForwardIcon from "../../../../assets/images/chevronForwardIcon.svg";
import { CategoryEnum } from "../../../../types/categoryEnum";
import transportIcon from "../../../../assets/images/transportIcon.svg";
import foodIcon from "../../../../assets/images/foodIcon.svg";
import electricityIcon from "../../../../assets/images/electricityIcon.svg";
import {
    StyledDate,
    StyledTitle,
    StyledDescription,
    StyledDivider,
    StyledImage,
} from "./styles";

interface CardContentProps {
    emissions: { [key: string]: Emission[] };
    isMobile: boolean;
    onMonthClick: (date: Date) => void;
}

export function CardContent({
    emissions,
    isMobile,
    onMonthClick,
}: CardContentProps) {
    const handleMonth = (date: string) => {
        const splittedDate = date.split("-");
        const year = splittedDate[0];
        const month = splittedDate[1];
        onMonthClick(new Date(+year, +month));
    };

    const getIcon = (category: any) => {
        let icon = "";
        if (category === CategoryEnum.Transport) {
            icon = transportIcon;
        } else if (category === CategoryEnum.Food) {
            icon = foodIcon;
        } else if (category === CategoryEnum.Electricity) {
            icon = electricityIcon;
        }

        return <img src={icon} alt="Category icon" height="24" width="24" />;
    };

    return (
        <Stack
            direction="column"
            spacing={2}
            alignItems="start"
            justifyContent="flex-start"
            width="100%"
        >
            {Object.keys(emissions)
                .reverse()
                .map((key) => (
                    <>
                        <Stack direction="row">
                            <StyledDate key={key}>{key}</StyledDate>
                            <Stack mt={isMobile ? 0.5 : 1} ml={1}>
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
                            {emissions[key].map((emission, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    spacing={1}
                                    mt={1}
                                >
                                    <Stack mt={3}>
                                        {getIcon(
                                            emission.subcategory?.category
                                        )}
                                    </Stack>
                                    <Stack
                                        direction="column"
                                        mb={1}
                                        width="100%"
                                    >
                                        <StyledTitle>
                                            {emission.title}
                                        </StyledTitle>
                                        <StyledDescription>
                                            {emission.subcategory?.name}
                                        </StyledDescription>
                                        <StyledDescription>
                                            {emission.date} -{" "}
                                            {emission.co2Emission?.toFixed(3)}{" "}
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
