import { Stack } from "@mui/material";

import homePageIllustration from "../../assets/images/homePageIllustration.svg";
import { StyledTitle, StyledSubtitle } from "./styles";

export default function HomePage() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            m={5}
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                width="40%"
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
            <Stack width="60%">
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
