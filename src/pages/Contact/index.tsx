import { Stack, useMediaQuery, useTheme } from "@mui/material";

import contactPageIllustration from "../../assets/images/contactPageIllustration.svg";
import { StyledTitle, StyledSubtitle } from "./styles";

export default function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const content = (
        <>
            <StyledTitle>Contact</StyledTitle>
            <StyledSubtitle>
                Do you like the project? Do you have a feedback for us? Reach
                out! <br />
                email@email.com <br />
                Laranjeiras 52, Lisbon, 1100-115 - Portugal <br />
                +351 210 705 4584 <br />
            </StyledSubtitle>
        </>
    );

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={isMobile ? 8 : 2}
            m={isMobile ? 0 : 5}
            height="100%"
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                width={isMobile ? "100%" : "40%"}
                p={isMobile ? 5 : 0}
                pl={isMobile ? 5 : 12}
                pr={isMobile ? 5 : 12}
                mb={isMobile ? 32 : 48}
                sx={{
                    position: "absolute",
                }}
            >
                {content}
            </Stack>
            <Stack
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: "absolute", bottom: 0 }}
            >
                <img
                    src={contactPageIllustration}
                    alt="Contact page illustration"
                    height="100%"
                    width={isMobile ? "100%" : "65%"}
                />
            </Stack>
        </Stack>
    );
}
