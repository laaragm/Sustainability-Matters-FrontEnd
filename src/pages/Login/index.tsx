import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import aboutUsPageIllustration from "../../assets/images/aboutUsPageIllustration.svg";
import { StyledLabel } from "./styles";
import { CustomizedButton } from "./../../shared/components/CustomizedButton/index";

export default function Login() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    // TODO: Implement functionality as soon as the backend is in place
    const handleLogin = () => {};

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
                spacing={3}
                width={isMobile ? "100%" : "20%"}
                sx={{
                    position: "absolute",
                }}
            >
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    spacing={1}
                >
                    <StyledLabel>Email</StyledLabel>
                    <TextField
                        id="email-field-login"
                        value={email}
                        onChange={(event) => handleEmail(event.target.value)}
                    />
                </Stack>
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    spacing={1}
                >
                    <StyledLabel>Password</StyledLabel>
                    <TextField
                        id="password-field-login"
                        value={password}
                        onChange={(event) => handlePassword(event.target.value)}
                    />
                </Stack>
                <CustomizedButton
                    color="secondary"
                    borderRadius="1.5rem"
                    fullWidth={true}
                    onClick={handleLogin}
                >
                    Login
                </CustomizedButton>
            </Stack>
            <Stack width="100%" sx={{ position: "absolute", bottom: 0 }}>
                <img
                    src={aboutUsPageIllustration}
                    alt="Abous us page illustration"
                    height="100%"
                    width="100%"
                />
            </Stack>
        </Stack>
    );
}
