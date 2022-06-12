import { StyledText } from "./styles";

interface CustomizedMessageProps {
    consumption: number;
    type: "day" | "month" | "year";
}

export function CustomizedMessage({
    consumption,
    type,
}: CustomizedMessageProps) {

    const europeanUnionCO2YearlyAverage = 6200; // Source: https://data.worldbank.org/indicator/EN.ATM.CO2E.PC?locations=EU
    const europeanUnionCO2MonthlyAverage = europeanUnionCO2YearlyAverage / 12;
    const europeanUnionCO2DailyAverage = europeanUnionCO2YearlyAverage / 365;

    if (type === "day") {
        if (consumption < europeanUnionCO2DailyAverage) {
            return (
                <StyledText>
                   Your daily consumption is according to European standards
                </StyledText>
            );
        }
        if (consumption > europeanUnionCO2DailyAverage) {
            return (
                <StyledText>
                    Your daily consumption is above European standards
                </StyledText>
            );
        } else {
            return (
                <StyledText>
                    Your daily consumption is according to European standards
                </StyledText>
            );
        }
    }

    if (type === "month") {
        if (consumption < europeanUnionCO2MonthlyAverage) {
            return (
                <StyledText>
                    Your monthly consumption is according to European standards
                </StyledText>
            );
        }
        if (consumption > europeanUnionCO2MonthlyAverage) {
            return (
                <StyledText>
                    Your monthly consumption is above European standards
                </StyledText>
            );
        } else {
            return (
                <StyledText>
                    Your monthly consumption is according to European standards
                </StyledText>
            );
        }
    } else {
        if (consumption < europeanUnionCO2YearlyAverage) {
            return (
                <StyledText>
                    Your annualy consumption is according to European standards
                </StyledText>
            );
        }

        if (consumption > europeanUnionCO2YearlyAverage) {
            return (
                <StyledText>
                    Your annualy consumption is above European standards
                </StyledText>
            );
        } else {
            return (
                <StyledText>
                    Your annualy consumption is according to European standards
                </StyledText>
            );
        }
    }
}
