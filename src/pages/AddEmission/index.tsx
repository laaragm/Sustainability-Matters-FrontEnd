import { useState } from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { CategorySelector } from "./components/CategorySelector";
import { CategoryType } from "../../types/categoryEnum";
import { StyledCard, StyledTitle } from "./styles";
import { ElectricityType } from "../../types/electricityEnum";
import { FoodType } from "../../types/foodEnum";
import { TransportType } from "../../types/transportEnum";
import { CustomizedButton } from "./../../shared/components/CustomizedButton/index";
import { AmountField } from "./components/AmountField";

const categoryOptions = Object.values(CategoryType);

export default function AddEmission() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [category, setCategory] = useState<string>("");
    const [subCategory, setSubCategory] = useState<string>("");
    const [subCategoryOptions, setSubCategoryOptions] = useState<any[]>([]);
    const [amountFieldTitle, setAmountFieldTitle] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);

    const handleCategory = (newCategory: string) => {
        setCategory(newCategory);
        updateSubCategoryOptions(newCategory);
    };

    const handleSubCategory = (newSubCategory: string) => {
        setSubCategory(newSubCategory);
    };

    const handleAmount = (newAmount: number) => {
        setAmount(newAmount);
    };

    const updateSubCategoryOptions = (newCategory: string) => {
        if (newCategory === CategoryType.electricity) {
            const types = Object.values(ElectricityType);
            setSubCategoryOptions(types);
            setAmountFieldTitle("Amount (Watt)");
        } else if (newCategory === CategoryType.food) {
            const types = Object.values(FoodType);
            setSubCategoryOptions(types);
            setAmountFieldTitle("Amount (kg)");
        } else if (newCategory === CategoryType.transport) {
            const types = Object.values(TransportType);
            setSubCategoryOptions(types);
            setAmountFieldTitle("Distance (km)");
        }
    };

    const handleCancel = () => {};

    const handleAddEmission = () => {};

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 0 : 5}
            height="100%"
            width="100%"
        >
            <StyledCard>
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    spacing={2}
                >
                    <Stack direction="row">
                        <StyledTitle>CO2 Emissions</StyledTitle>
                    </Stack>
                    <Stack width="30%" pt={5}>
                        <CategorySelector
                            title="Select a category"
                            id="category-field-add-emission"
                            options={categoryOptions}
                            value={category}
                            onChange={handleCategory}
                        />
                    </Stack>
                    <Stack width="30%" pt={2}>
                        <CategorySelector
                            title="Select a sub-category"
                            id="sub-category-field-add-emission"
                            options={subCategoryOptions}
                            value={subCategory}
                            onChange={handleSubCategory}
                        />
                    </Stack>
                    {subCategory.length > 0 && (
                        <Stack width="30%" pt={2}>
                            <AmountField
                                title={amountFieldTitle}
                                id="amount-field-add-emission"
                                value={amount}
                                onChange={handleAmount}
                            />
                        </Stack>
                    )}
                    <Stack direction="row" width="30%" spacing={1} pt={5}>
                        <CustomizedButton
                            variant="text"
                            color="secondary"
                            borderRadius="1.5rem"
                            fullWidth={true}
                            onClick={handleCancel}
                        >
                            Cancel
                        </CustomizedButton>
                        <CustomizedButton
                            color="secondary"
                            borderRadius="1.5rem"
                            fullWidth={true}
                            disabled={
                                category.length === 0 ||
                                subCategory.length === 0
                            }
                            onClick={handleAddEmission}
                        >
                            Add
                        </CustomizedButton>
                    </Stack>
                </Stack>
            </StyledCard>
        </Stack>
    );
}
