import { Stack, useMediaQuery, useTheme } from "@mui/material";

import homePageIllustration from "../../assets/images/homePageIllustration.svg";
import { StyledTitle, StyledSubtitle } from "./styles";

export default function HomePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            alignItems="center"
            justifyContent="space-between"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 3 : 5}
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                width={isMobile ? "100%" : "40%"}
            >
                <StyledTitle>
                    Lets Make our Earth Green and Clean ☘️
                </StyledTitle>
                <StyledSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat facilisis quam volutpat turpis. Felis mi, ultrices
                    ornare duis placerat erat.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Volutpat facilisis quam
                    volutpat turpis. Felis mi, ultrices ornare duis placerat
                    erat.
                </StyledSubtitle>
            </Stack>
            <Stack width={isMobile ? "100%" : "60%"}>
                <img
                    src={homePageIllustration}
                    alt="Home page illustration"
                    height="100%"
                    width="100%"
                />
            </Stack>
        </Stack>
    );
}
