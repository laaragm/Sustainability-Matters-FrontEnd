import { useMemo, useState } from "react";
import { Stack } from "@mui/material";

import { Food } from "../../../../types/foodItem";
import { CustomizedTextField } from "../../../../shared/components/CustomizedTextField";
import { CustomizedButton } from "../../../../shared/components/CustomizedButton";
import { StyledCard, StyledTitle } from "./styles";

interface SideModalProps {
    food: Food | null;
    onCancel: () => void;
    onSave: (food: Food, isCreate: boolean) => void;
    onDelete: (food: Food) => void;
}

export function SideModal({
    food,
    onCancel,
    onSave,
    onDelete,
}: SideModalProps) {
    const isCreate = useMemo(() => food == undefined || food == null, [food]);
    const [type, setType] = useState<string | null>(food?.foodType || null);
    const [co2, setCO2] = useState<number | null>(food?.co2 || null);

    const handleDeleteItem = () => {
        // @ts-ignore
        onDelete(food);
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleType = (value: string) => {
        setType(value);
    };

    const handleCO2EmissionFactor = (value: number) => {
        setCO2(value);
    };

    const handleSave = () => {
        if (type && co2) {
            const newFoodItem = {
                food_type: type,
                co2: co2,
            };
            newFoodItem.co2 = +newFoodItem.co2;
            // @ts-ignore
            onSave(newFoodItem, isCreate);
        }
    };

    return (
        <StyledCard>
            <Stack direction="column" spacing={5} width="100%">
                <Stack mb={10}>
                    <StyledTitle>
                        {isCreate ? "Add CO2" : "Update CO2"}
                    </StyledTitle>
                </Stack>
                <CustomizedTextField
                    title="Type"
                    id="type-field-food"
                    customTextField
                    type="text"
                    value={type}
                    onChange={(value) => handleType(value)}
                />
                <CustomizedTextField
                    title="CO2"
                    id="co2-field-food"
                    customTextField
                    type="number"
                    value={co2}
                    onChange={(value) => handleCO2EmissionFactor(value)}
                />
                <Stack
                    direction="column"
                    mt={5}
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    bottom="5%"
                    position="absolute"
                    mb={3}
                    width="70%"
                >
                    <CustomizedButton
                        color="secondary"
                        fullWidth
                        borderRadius="1.5rem"
                        onClick={handleSave}
                    >
                        Save
                    </CustomizedButton>
                    {!isCreate && (
                        <CustomizedButton
                            color="error"
                            fullWidth
                            borderRadius="1.5rem"
                            onClick={handleDeleteItem}
                        >
                            Delete
                        </CustomizedButton>
                    )}
                    <CustomizedButton
                        variant="text"
                        color={isCreate ? "error" : "secondary"}
                        borderRadius="1.5rem"
                        fullWidth
                        onClick={handleCancel}
                    >
                        Cancel
                    </CustomizedButton>
                </Stack>
            </Stack>
        </StyledCard>
    );
}
