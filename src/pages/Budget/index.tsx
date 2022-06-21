import {
    CircularProgress,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import budgetIllustration from "../../assets/images/budgetPageIllustration.svg";
import { CustomizedBox } from "../../shared/components/CustomizedBox";
import { CustomizedMessage } from "../../shared/components/CustomizedMessage";
import { useBudget } from "../../hooks/useBudget";
import { StyledTitle, StyledSubtitle, StyledText, StyledCard } from "./styles";

export default function Budget() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { data: posts, isLoading } = useBudget();

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
                    width="90%"
                />
            </Stack>
            <StyledCard isMobile={isMobile}>
                {isLoading ? (
                    <Stack
                        width="100%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <CircularProgress color="inherit" />
                    </Stack>
                ) : (
                    <Stack
                        alignItems="center"
                        direction="column"
                        justifyContent={
                            isMobile ? "flex-start" : "space-evenly"
                        }
                        spacing={isMobile ? 2 : 0}
                    >
                        <StyledTitle>
                            C02 consumption based on European standards
                        </StyledTitle>
                        <Stack mt={3}>
                            <Stack mb={2}>
                                <StyledSubtitle isMobile={isMobile}>
                                    Daily
                                </StyledSubtitle>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={isMobile ? 0 : 1}
                                >
                                    <CustomizedBox
                                        // @ts-ignore
                                        consumption={posts?.budget.day}
                                        type="day"
                                    />
                                    <StyledText isMobile={isMobile}>
                                        {/* @ts-ignore */}
                                        {posts?.budget.day > 0
                                            ? // @ts-ignore
                                              posts?.budget.day?.toFixed(3)
                                            : posts?.budget.day}{" "}
                                        kgCO2eq{" "}
                                    </StyledText>
                                </Stack>
                                <CustomizedMessage
                                    // @ts-ignore
                                    consumption={posts?.budget.day}
                                    type="day"
                                />
                            </Stack>

                            <Stack mb={2}>
                                <StyledSubtitle isMobile={isMobile}>
                                    Monthly
                                </StyledSubtitle>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={isMobile ? 0 : 1}
                                >
                                    <CustomizedBox
                                        // @ts-ignore
                                        consumption={posts?.budget.month}
                                        type="month"
                                    />
                                    <StyledText isMobile={isMobile}>
                                        {
                                            // @ts-ignore
                                            posts?.budget.month > 0
                                                ? // @ts-ignore
                                                  posts?.budget.month?.toFixed(
                                                      3
                                                  )
                                                : posts?.budget.month
                                        }{" "}
                                        kgCO2eq{" "}
                                    </StyledText>
                                </Stack>
                                <CustomizedMessage
                                    // @ts-ignore
                                    consumption={posts?.budget.month}
                                    type="month"
                                />
                            </Stack>

                            <Stack mb={2}>
                                <StyledSubtitle isMobile={isMobile}>
                                    Annualy
                                </StyledSubtitle>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    spacing={isMobile ? 0 : 1}
                                >
                                    <CustomizedBox
                                        // @ts-ignore
                                        consumption={posts?.budget.year}
                                        type="year"
                                    />
                                    <StyledText isMobile={isMobile}>
                                        {/* @ts-ignore */}
                                        {posts?.budget.year > 0
                                            ? // @ts-ignore
                                              posts?.budget.year?.toFixed(3)
                                            : posts?.budget.year}{" "}
                                        kgCO2eq{" "}
                                    </StyledText>
                                </Stack>
                                <CustomizedMessage
                                    // @ts-ignore
                                    consumption={posts?.budget.year}
                                    type="year"
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                )}
            </StyledCard>
        </>
    );
}
