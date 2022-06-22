import { Stack, useMediaQuery, useTheme } from "@mui/material";

import aboutUsPageIllustration from "../../assets/images/aboutUsPageIllustration.svg";
import { StyledTitle, StyledSubtitle } from "./styles";

export default function AboutUs() {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const content = (
        <>
            <StyledTitle>About us</StyledTitle>
            <StyledSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat facilisis quam volutpat turpis. Felis mi, ultrices
                ornare duis placerat erat.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Volutpat facilisis quam volutpat
                turpis. Felis mi, ultrices ornare duis placerat erat. Aenean
                convallis.
            </StyledSubtitle>
        </>
    );

    return (
        <>
            {isMobile ? (
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    width="100%"
                    p={5}
                >
                    {content}
                </Stack>
            ) : (
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={isTablet ? 8 : 2}
                    m={isTablet ? 0 : 5}
                    height="100%"
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                        width={isTablet ? "100%" : "40%"}
                        p={isTablet ? 5 : 0}
                        pl={isTablet ? 5 : 12}
                        pr={isTablet ? 5 : 12}
                        sx={{
                            position: isTablet ? "" : "absolute",
                        }}
                    >
                        {content}
                    </Stack>
                    <Stack
                        width="100%"
                        sx={{ position: "absolute", bottom: 0 }}
                    >
                        <img
                            src={aboutUsPageIllustration}
                            alt="Abous us page illustration"
                            height="100%"
                            width={isTablet ? "100%" : "97%"}
                        />
                    </Stack>
                </Stack>
            )}
        </>
    );
}
