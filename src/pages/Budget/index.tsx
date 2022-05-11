import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import budgetIllustration from "../../assets/images/budgetPageIllustration.svg";
import { StyledTitle, StyledSubtitle, StyledText } from './styles';
import { CustomizedBox } from "../../shared/components/CustomizedBox";
import { useState } from 'react';

import { useBudget} from "../../hooks/useBudget";

export default function Budget() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [dailyConsumption, setDailyConsumption] = useState("");
    const [monthlyConsumption, setMonthlyConsumption] = useState("");
    const [annualyConsumption, setAnnualyConsumption] = useState("");

    const { data: posts, isLoading } = useBudget();
    const [loading, setLoading] = useState(false);



    console.log("testeeeeeee");
    console.log(posts?.budget.year);
    console.log(posts?.budget.month);
    console.log(posts?.budget.day);
    console.log("testeeeeeee");


    return (
        <>
            <Stack
                    width="100%"
                    sx={{ position: "absolute", bottom: 0, zIndex: "-1" }}
                    >
                    <img
                        src={budgetIllustration}
                        alt="Budget illustration"
                        height="90%"
                        width= "90%"
                    />
            </Stack>
            <Stack
                alignItems="center"
                direction="column"
                justifyContent="space-evenly"
                spacing={isMobile ? 1 : 2}
                sx={{
                    width:"34.0rem",
                    height:"38.0rem",
                    backgroundColor:'white',
                    borderRadius:"1.5rem",
                }}
            >
                <StyledTitle>
                    C02 consumption based on European standards
                </StyledTitle>
                <Stack>
                    <Stack mb={2}>
                        <StyledSubtitle>
                            Daily
                        </StyledSubtitle>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <CustomizedBox color="red" width= {120} />
                            <StyledText>38,56 kgCO2eq</StyledText>
                        </Stack>
                        <StyledText>
                            Your daily consumption is according to European standars
                        </StyledText>
                    </Stack>

                    <Stack mb={2}>
                        <StyledSubtitle>
                            Monthly
                        </StyledSubtitle>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <CustomizedBox color="green" width= {240}/>
                            <StyledText>38,56 kgCO2eq</StyledText>
                        </Stack>
                        <StyledText>
                            Your monthly consumption is according to European standars
                        </StyledText>
                    </Stack>

                    <Stack mb={2}>
                        <StyledSubtitle>
                            Annualy
                        </StyledSubtitle>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <CustomizedBox color="orange" width= {320}/>
                            <StyledText>38,56 kgCO2eq</StyledText>
                        </Stack>
                        <StyledText>
                            Your annualy consumption is according to European standars
                        </StyledText>
                    </Stack>      
                </Stack>
            </Stack>
        </>
    )

}