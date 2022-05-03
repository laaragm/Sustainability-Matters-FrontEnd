import { Stack } from "@mui/material";

import chevronForwardIcon from "../../../../assets/images/chevronForwardIcon.svg";
import { Food } from "../../../../types/foodItem";
import {
    StyledDescription,
    StyledDivider,
    StyledImage,
    StyledTitle,
} from "./styles";

interface CardContentProps {
    foodItems: Food[];
    isMobile: boolean;
    onClick: (item: Food) => void;
}

export function CardContent({
    foodItems,
    isMobile,
    onClick,
}: CardContentProps) {
    const handleClick = (food: Food) => {
        onClick(food);
    };

    return (
        <Stack
            direction="column"
            spacing={2}
            alignItems="start"
            justifyContent="flex-start"
            width="100%"
        >
            {foodItems.map((food) => (
                <Stack
                    key={food.foodType}
                    direction="row"
                    spacing={1}
                    mt={1}
                    width="100%"
                >
                    <Stack direction="column" mb={1} width="100%">
                        <StyledTitle onClick={() => handleClick(food)}>
                            {food.foodType}
                        </StyledTitle>
                        <StyledDescription>
                            CO2: <strong>{food.co2}</strong>
                        </StyledDescription>
                        <Stack width="100%" mt={1}>
                            <StyledDivider />
                        </Stack>
                    </Stack>
                    <Stack
                        pt={isMobile ? 3 : 1.3}
                        justifyContent="start"
                        ml={1}
                    >
                        <StyledImage
                            src={chevronForwardIcon}
                            alt="Chevron forward icon"
                            height="20"
                            width="20"
                            onClick={() => handleClick(food)}
                        />
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
}
