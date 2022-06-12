import { Box } from "@mui/material";

interface CustomizedBoxProps {
    consumption: number;
    type: "day" | "month" | "year";
}

export function CustomizedBox({ consumption, type }: CustomizedBoxProps) {
    const europeanUnionCO2YearlyAverage = 6200; // Source: https://data.worldbank.org/indicator/EN.ATM.CO2E.PC?locations=EU
    const europeanUnionCO2MonthlyAverage = europeanUnionCO2YearlyAverage / 12;
    const europeanUnionCO2DailyAverage = europeanUnionCO2YearlyAverage / 365;

    if (type === "day") {
        if (consumption < europeanUnionCO2DailyAverage / 2) {
            return (
                <Box
                    sx={{
                        width: "4.0rem",
                        height: "2.5rem",
                        backgroundColor: "green",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        }

        if (consumption > europeanUnionCO2DailyAverage) {
            return (
                <Box
                    sx={{
                        width: "17.0rem",
                        height: "2.5rem",
                        backgroundColor: "red",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        } else {
            return (
                <Box
                    sx={{
                        width: "11.0rem",
                        height: "2.5rem",
                        backgroundColor: "orange",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        }
    }

    if (type === "month") {
        if (consumption < europeanUnionCO2MonthlyAverage / 2) {
            return (
                <Box
                    sx={{
                        width: "4.0rem",
                        height: "2.5rem",
                        backgroundColor: "green",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        }
        if (consumption > europeanUnionCO2MonthlyAverage) {
            return (
                <Box
                    sx={{
                        width: "17.0rem",
                        height: "2.5rem",
                        backgroundColor: "red",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        } else {
            return (
                <Box
                    sx={{
                        width: "11.0rem",
                        height: "2.5rem",
                        backgroundColor: "orange",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        }
    } else {
        if (consumption < europeanUnionCO2YearlyAverage) {
            return (
                <Box
                    sx={{
                        width: "4.0rem",
                        height: "2.5rem",
                        backgroundColor: "green",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        }

        if (consumption > europeanUnionCO2YearlyAverage) {
            return (
                <Box
                    sx={{
                        width: "17.0rem",
                        height: "2.5rem",
                        backgroundColor: "red",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        } else {
            return (
                <Box
                    sx={{
                        width: "11.0rem",
                        height: "2.5rem",
                        backgroundColor: "orange",
                        borderRadius: "2.0rem",
                    }}
                />
            );
        }
    }
}
