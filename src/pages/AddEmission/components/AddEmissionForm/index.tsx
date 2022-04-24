import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

import { CustomizedButton } from "../../../../shared/components/CustomizedButton";
import { AmountField } from "../AmountField";
import { CategorySelector } from "../CategorySelector";
import { PATHS } from "../../../../routes/paths";
import { StyledTitle } from "./styles";

interface AddEmissionFormProps {
    categoryOptions: Array<string>;
    category: string;
    subCategoryOptions: Array<string>;
    subCategory: string;
    amount: number;
    amountFieldTitle: string;
    isMobile: boolean;
    onCategoryChange: (newCategory: string) => void;
    onSubCategoryChange: (newSubCategory: string) => void;
    onAmountChange: (newAmount: number) => void;
    onAddEmission: () => void;
}

export function AddEmissionForm({
    categoryOptions,
    category,
    subCategoryOptions,
    subCategory,
    amount,
    amountFieldTitle,
    isMobile,
    onSubCategoryChange,
    onAmountChange,
    onCategoryChange,
    onAddEmission,
}: AddEmissionFormProps) {
    let navigate = useNavigate();

    const handleCategory = (newCategory: string) => {
        onCategoryChange(newCategory);
    };

    const handleSubCategory = (newSubCategory: string) => {
        onSubCategoryChange(newSubCategory);
    };

    const handleAmount = (newAmount: number) => {
        onAmountChange(newAmount);
    };

    const handleCancel = () => {
        navigate(PATHS.emissions.route);
    };

    const handleAddEmission = () => {
        onAddEmission();
    };

    return (
        <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={isMobile ? 3 : 2}
            width={isMobile ? "60%" : "50%"}
            pl={isMobile ? 1 : 3}
        >
            <Stack direction="row">
                <StyledTitle isMobile={isMobile}>CO2 Emissions</StyledTitle>
            </Stack>
            <Stack width={isMobile ? "90%" : "50%"} pt={5}>
                <CategorySelector
                    title="Select a category"
                    id="category-field-add-emission"
                    options={categoryOptions}
                    value={category}
                    onChange={handleCategory}
                />
            </Stack>
            <Stack width={isMobile ? "90%" : "50%"} pt={2}>
                <CategorySelector
                    title="Select a sub-category"
                    id="sub-category-field-add-emission"
                    options={subCategoryOptions}
                    value={subCategory}
                    onChange={handleSubCategory}
                />
            </Stack>
            {category.length > 0 && (
                <Stack width={isMobile ? "90%" : "50%"} pt={2}>
                    <AmountField
                        title={amountFieldTitle}
                        id="amount-field-add-emission"
                        isMobile={isMobile}
                        value={amount}
                        onChange={handleAmount}
                    />
                </Stack>
            )}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                width={isMobile ? "90%" : "50%"}
                spacing={1}
                pt={5}
            >
                <CustomizedButton
                    variant="outlined"
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
                    disabled={category.length === 0 || subCategory.length === 0}
                    onClick={handleAddEmission}
                >
                    Add
                </CustomizedButton>
            </Stack>
        </Stack>
    );
}