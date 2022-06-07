import { Box, Container } from "@mui/material";

import SeverErrorIllustration from "../../assets/Illustration500";
import { RootStyle, StyledDescription, StyledTitle } from "./styles";

export default function NoPermissions() {
    return (
        <RootStyle title="No permissions">
            <Container>
                <Box
                    sx={{ maxWidth: 1080, margin: "auto", textAlign: "center" }}
                >
                    <StyledTitle>No permissions</StyledTitle>
                    <StyledDescription>
                        Looks like you don't have the necessary permissions.
                        Please login or sign up.
                    </StyledDescription>
                    <SeverErrorIllustration
                        sx={{ height: 260, my: { xs: 5, sm: 10 } }}
                    />
                </Box>
            </Container>
        </RootStyle>
    );
}
