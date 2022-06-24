import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
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
import { queryClient } from "../../services/queryClient";

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
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);

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

    const handleDate = (value: any) => {
        setDate(value);
    };

    const handleTitle = (value: any) => {
        setTitle(value);
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

    const getDate = () => {
        // @ts-ignore
        const splittedDate = date?.split("/");
        const day = splittedDate[0];
        const month = splittedDate[1];
        const year = splittedDate[2];

        return `${year}-${month}-${day}`;
    };

    const getDateWithoutDay = () => {
        // @ts-ignore
        const splittedDate = date?.split("/");
        const month = splittedDate[1];
        const year = splittedDate[2];
        return `${year}-${month}`;
    };

    const isDateValid = () => {
        // @ts-ignore
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
            return false;
        }
        // @ts-ignore
        var parts = date?.split("/");
        var day = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[2], 10);
        if (year < 1000 || year > 3000 || month == 0 || month > 12) {
            return false;
        }
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            monthLength[1] = 29;
        }

        return day > 0 && day <= monthLength[month - 1];
    };

    const isAmountValid = () => {
        const expression = /^[0-9.,]+$/;
        const value = amount?.toString();
        const found = value.match(expression);
        if (found == null) {
            return false;
        }
        return true;
    };

    const fieldsAreCorrect = () => {
        let result = true;
        const dateIsValid = isDateValid();
        const amountIsValid = isAmountValid();
        if (!dateIsValid) {
            toast.error("Date format is not valid.");
            result = false;
        }
        if (!amountIsValid) {
            toast.error("Amount format is not valid.");
            result = false;
        }
        return result;
    };

    const createEmission = useMutation(
        async () => {
            try {
                const fieldsAreValidated = fieldsAreCorrect();
                if (fieldsAreValidated) {
                    const response = await api.post("/consumption/", {
                        title: title,
                        subcategory: subCategory,
                        date: getDate(),
                        amount: +amount,
                        category: category,
                    });
                    toast.success("Consumption created successfully.");
                    navigate(
                        PATHS.emission.route.replace(":id", getDateWithoutDay())
                    );
                }
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong. Please try again.");
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("emissions");
                queryClient.invalidateQueries("emission");
            },
        }
    );

    const handleAddEmission = async () => {
        await createEmission.mutateAsync();
    };

    return (
        <Stack
            direction={isMobile ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 5 : 2}
            m={isMobile ? 0 : 5}
            mt={5}
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
                        title={title}
                        date={date}
                        onSubCategoryChange={handleSubCategory}
                        onAmountChange={handleAmount}
                        onCategoryChange={handleCategory}
                        onAddEmission={handleAddEmission}
                        onTitleChange={handleTitle}
                        onDateChange={handleDate}
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
