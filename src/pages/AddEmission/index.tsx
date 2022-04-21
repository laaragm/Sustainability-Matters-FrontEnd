import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { CategorySelector } from "./components/CategorySelector";
import { CategoryType } from "../../types/categoryEnum";
import { StyledCard, StyledTitle } from "./styles";
import { FoodType } from "../../types/food/foodEnum";
import { TransportType } from "../../types/transport/transportEnum";
import { CustomizedButton } from "./../../shared/components/CustomizedButton/index";
import { AmountField } from "./components/AmountField";
import { CO2Indicator } from "./components/CO2Indicator";
import { PATHS } from "../../routes/paths";
import { api } from "../../services/api";
import { ElectricityType } from "../../types/electricity/electricityEnum";
import { electricityFactors } from "../../types/electricity/electricityFactors";
import { foodFactors } from "../../types/food/foodFactors";
import { transportFactors } from "../../types/transport/transportFactors";

const categoryOptions = Object.values(CategoryType);

export default function AddEmission() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [category, setCategory] = useState<string>(categoryOptions[0]);
    const [subCategory, setSubCategory] = useState<string>("");
    const [subCategoryOptions, setSubCategoryOptions] = useState<any[]>([]);
    const [amountFieldTitle, setAmountFieldTitle] =
        useState<string>("Distance (km)");
    const [amount, setAmount] = useState<number>(0);
    const [co2Emission, setCO2Emission] = useState<number>(0);

    useEffect(() => {
        updateSubCategoryOptions(category);
    }, []);

    useEffect(() => {
        if (
            category.length > 0 &&
            subCategoryOptions.length > 0 &&
            amount >= 0
        ) {
            calculateC02Emission();
        }
    }, [amount, subCategory, category]);

    const calculateC02Emission = () => {
        let selectedKey = "";
        let keys: string[] = [];
        let emissionFactor = 0;
        const subCategoryValue = subCategory.replace(/ /g, "");
        if (category === CategoryType.electricity) {
            keys = Object.keys(electricityFactors);
            // @ts-ignore
            selectedKey = keys.find((key) => key === subCategoryValue);
            // @ts-ignore
            emissionFactor = electricityFactors[selectedKey];
        } else if (category === CategoryType.food) {
            keys = Object.keys(foodFactors);
            // @ts-ignore
            selectedKey = keys.find((key) => key === subCategoryValue);
            // @ts-ignore
            emissionFactor = foodFactors[selectedKey];
        } else if (category === CategoryType.transport) {
            keys = Object.keys(transportFactors);
            // @ts-ignore
            selectedKey = keys.find((key) => key === subCategoryValue);
            // @ts-ignore
            emissionFactor = transportFactors[selectedKey];
        }
        const result = emissionFactor * amount;
        setCO2Emission(+result.toFixed(3));
    };

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

    const handleCancel = () => {
        navigate(PATHS.emissions.route);
    };

    const handleAddEmission = async () => {
        if (category === CategoryType.electricity) {
            const response = await api.post("electricity-consumption", {
                electricityConsumption: {
                    amount: amount,
                    date: new Date(),
                },
            });
            console.log(response);
        } else if (category === CategoryType.food) {
            const response = await api.post("food-consumption", {
                foodConsumption: {
                    amount: amount,
                    date: new Date(),
                },
            });
            console.log(response);
        } else {
            const response = await api.post("transport-usage", {
                transportUsage: {
                    amount: amount,
                    date: new Date(),
                },
            });
            console.log(response);
        }
        navigate(PATHS.emissions.route);
    };

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
                <Stack direction="row" width="100%">
                    <Stack
                        direction="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        spacing={2}
                        width="50%"
                        pl={3}
                    >
                        <Stack direction="row">
                            <StyledTitle>CO2 Emissions</StyledTitle>
                        </Stack>
                        <Stack width={isMobile ? "60%" : "50%"} pt={5}>
                            <CategorySelector
                                title="Select a category"
                                id="category-field-add-emission"
                                options={categoryOptions}
                                value={category}
                                onChange={handleCategory}
                            />
                        </Stack>
                        <Stack width={isMobile ? "60%" : "50%"} pt={2}>
                            <CategorySelector
                                title="Select a sub-category"
                                id="sub-category-field-add-emission"
                                options={subCategoryOptions}
                                value={subCategory}
                                onChange={handleSubCategory}
                            />
                        </Stack>
                        {category.length > 0 && (
                            <Stack width={isMobile ? "60%" : "50%"} pt={2}>
                                <AmountField
                                    title={amountFieldTitle}
                                    id="amount-field-add-emission"
                                    value={amount}
                                    onChange={handleAmount}
                                />
                            </Stack>
                        )}
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            width={isMobile ? "60%" : "50%"}
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
                    <Stack
                        width="50%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CO2Indicator value={co2Emission} />
                    </Stack>
                </Stack>
            </StyledCard>
        </Stack>
    );
}
