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
    StyledConsumptionInfo,
} from "./styles";

interface EmissionData {
    totalCount: number;
    emissions: Emission[];
    totalConsumption: number;
    europeanUnionAverage: number;
}

interface CardContentProps {
    data: EmissionData;
    date: string;
    isMobile: boolean;
    onRowClick: (emission: Emission) => void;
}

export function CardContent({
    data,
    date,
    isMobile,
    onRowClick,
}: CardContentProps) {
    const { emissions, totalCount, totalConsumption, europeanUnionAverage } =
        data;

    const handleRowClick = (emission: Emission) => {
        onRowClick(emission);
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
            <StyledDate key={date}>{date}</StyledDate>
            <Stack direction="column" mt={2} mb={2} spacing={0.5}>
                <StyledConsumptionInfo>
                    Total: {totalConsumption} kgCO2eq
                </StyledConsumptionInfo>
                <StyledConsumptionInfo>
                    EU average: {europeanUnionAverage} kgCO2eq
                </StyledConsumptionInfo>
            </Stack>
            <Stack width="100%">
                {emissions?.map((emission) => (
                    <Stack
                        key={`${emission.subcategory}-${emission.amount}-${emission.date}`}
                        direction="row"
                        spacing={1}
                        mt={1}
                    >
                        <Stack mt={1}>
                            {getIcon(emission.subcategory?.category)}
                        </Stack>
                        <Stack direction="row" width="100%">
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
                            <Stack mt={isMobile ? 3 : 1.3} ml={1}>
                                <StyledImage
                                    src={chevronForwardIcon}
                                    alt="Chevron forward icon"
                                    height="20"
                                    width="20"
                                    onClick={() => handleRowClick(emission)}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
}
