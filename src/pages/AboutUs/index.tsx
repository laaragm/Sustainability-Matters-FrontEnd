import { Stack, useMediaQuery, useTheme } from "@mui/material";

import aboutUsPageIllustration from "../../assets/images/aboutUsPageIllustration.svg";
import { StyledTitle, StyledSubtitle } from "./styles";

export default function AboutUs() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack
            direction="column"
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
                sx={{ position: "absolute", bottom: "40%" }}
            >
                <StyledTitle>About us</StyledTitle>
                <StyledSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat facilisis quam volutpat turpis. Felis mi, ultrices
                    ornare duis placerat erat.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Volutpat facilisis quam
                    volutpat turpis. Felis mi, ultrices ornare duis placerat
                    erat. Aenean convallis magna eu mauris efficitur molestie.
                    Maecenas volutpat urna vel lacus placerat porta. Ut vehicula
                    sollicitudin augue, a aliquam ipsum iaculis in. Etiam
                    feugiat molestie nunc, ut imperdiet urna semper convallis.
                    Aliquam consectetur augue eget mauris pulvinar, eu
                    vestibulum odio consequat. Duis eu fermentum ex. Donec
                    bibendum nulla tellus, vitae iaculis urna cursus varius. In
                    rutrum dui ac lectus porta, vitae elementum nunc viverra.
                </StyledSubtitle>
            </Stack>
            <Stack width="100%" sx={{ position: "absolute", bottom: 0 }}>
                <img
                    src={aboutUsPageIllustration}
                    alt="Home page illustration"
                    height="100%"
                    width={isMobile ? "100%" : "97%"}
                />
            </Stack>
        </Stack>
    );
}
