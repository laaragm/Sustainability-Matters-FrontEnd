import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import loginPageIllustration from "../../assets/images/loginPageIllustration.svg";
import { CustomizedButton } from "./../../shared/components/CustomizedButton/index";
import { CustomizedTextField } from "../../shared/components/CustomizedTextField";

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
            <Stack width="100%" sx={{ position: "absolute", bottom: 0 }}>
                <img
                    src={loginPageIllustration}
                    alt="Login page illustration"
                    height="100%"
                    width="100%"
                />
            </Stack>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={4}
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
                    width="100%"
                >
                    <CustomizedTextField
                        title="Email"
                        id="email-field-login"
                        type="email"
                        value={email}
                        onChange={(value) => handleEmail(value)}
                    />
                </Stack>
                <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    spacing={1}
                    width="100%"
                >
                    <CustomizedTextField
                        title="Password"
                        id="password-field-login"
                        type="password"
                        value={password}
                        onChange={(value) => handlePassword(value)}
                    />
                </Stack>
                <CustomizedButton
                    color="secondary"
                    borderRadius="1.5rem"
                    fullWidth={true}
                    disabled={email.length === 0 || password.length === 0}
                    onClick={handleLogin}
                >
                    Login
                </CustomizedButton>
            </Stack>
        </Stack>
    );
}
