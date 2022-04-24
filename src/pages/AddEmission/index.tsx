import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { CategoryEnum } from "../../types/categoryEnum";
import { FoodType } from "../../types/food/foodEnum";
import { TransportType } from "../../types/transport/transportEnum";
import { CO2Indicator } from "./components/CO2Indicator";
import { PATHS } from "../../routes/paths";
import { api } from "../../services/api";
import { ElectricityType } from "../../types/electricity/electricityEnum";
import { electricityFactors } from "../../types/electricity/electricityFactors";
import { foodFactors } from "../../types/food/foodFactors";
import { transportFactors } from "../../types/transport/transportFactors";
import { AddEmissionForm } from "./components/AddEmissionForm";
import { StyledCard } from "./styles";

const categoryOptions = Object.values(CategoryEnum);

export default function AddEmission() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [category, setCategory] = useState<string>(categoryOptions[0]);
    const [subCategory, setSubCategory] = useState<string>("");
    const [subCategoryOptions, setSubCategoryOptions] = useState<string[]>([]);
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
        if (category === CategoryEnum.Electricity) {
            keys = Object.keys(electricityFactors);
            // @ts-ignore
            selectedKey = keys.find((key) => key === subCategoryValue);
            // @ts-ignore
            emissionFactor = electricityFactors[selectedKey];
        } else if (category === CategoryEnum.Food) {
            keys = Object.keys(foodFactors);
            // @ts-ignore
            selectedKey = keys.find((key) => key === subCategoryValue);
            // @ts-ignore
            emissionFactor = foodFactors[selectedKey];
        } else if (category === CategoryEnum.Transport) {
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
        if (newCategory === CategoryEnum.Electricity) {
            const types = Object.values(ElectricityType);
            setSubCategoryOptions(types);
            setAmountFieldTitle("Amount (Watt)");
        } else if (newCategory === CategoryEnum.Food) {
            const types = Object.values(FoodType);
            setSubCategoryOptions(types);
            setAmountFieldTitle("Amount (kg)");
        } else if (newCategory === CategoryEnum.Transport) {
            const types = Object.values(TransportType);
            setSubCategoryOptions(types);
            setAmountFieldTitle("Distance (km)");
        }
    };

    const handleAddEmission = async () => {
        try {
            const response = await api.post("emissions", {
                emission: {
                    amount: amount,
                    date: new Date(),
                    subcategory: subCategory,
                },
            });
            navigate(PATHS.emissions.route);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Stack
            direction={isMobile ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 0 : 5}
            mt={isMobile ? 6 : 5}
            height="100%"
            width="100%"
        >
            <StyledCard isMobile={isMobile}>
                <Stack direction="row" width="100%">
                    <AddEmissionForm
                        categoryOptions={categoryOptions}
                        category={category}
                        subCategoryOptions={subCategoryOptions}
                        subCategory={subCategory}
                        amount={amount}
                        amountFieldTitle={amountFieldTitle}
                        onSubCategoryChange={handleSubCategory}
                        onAmountChange={handleAmount}
                        onCategoryChange={handleCategory}
                        onAddEmission={handleAddEmission}
                        isMobile={isMobile}
                    />
                    <Stack
                        width={isMobile ? "40%" : "50%"}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CO2Indicator
                            value={co2Emission || 0}
                            isMobile={isMobile}
                        />
                    </Stack>
                </Stack>
            </StyledCard>
        </Stack>
    );
}