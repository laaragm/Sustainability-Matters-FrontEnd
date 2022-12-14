import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import loginPageIllustration from "../../assets/images/loginPageIllustration.svg";
import { CustomizedButton } from "./../../shared/components/CustomizedButton/index";
import { CustomizedTextField } from "../../shared/components/CustomizedTextField";
import { useAuth } from "../../hooks/useAuth";
import { PATHS } from "../../routes/paths";
import { SuspenseImg } from "./../../shared/components/SuspenseImage";
import { StyledForgotPassword } from "./styles";

export default function Login() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const { login } = useAuth();
    let navigate = useNavigate();

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handleLogin = async () => {
        try {
            setIsButtonLoading(true);
            await login(email, password);
            setIsButtonLoading(false);
            navigate(PATHS.emissions.route);
        } catch (error) {
            toast.error("Invalid credentials. Please try again.");
            console.log(error);
        }
    };

    const handleForgotPassword = () => {
        navigate(PATHS.forgotPassword.route);
    };

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
                <SuspenseImg
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
                width={isMobile ? "100%" : "20%"}
                sx={{
                    position: "absolute",
                }}
            >
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                    mb={isMobile ? 3 : 4}
                    width={isMobile ? "80%" : "100%"}
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
                    alignItems="center"
                    justifyContent="center"
                    spacing={1}
                    mb={isMobile ? 1 : 2}
                    width={isMobile ? "80%" : "100%"}
                >
                    <CustomizedTextField
                        title="Password"
                        id="password-field-login"
                        type="password"
                        value={password}
                        onChange={(value) => handlePassword(value)}
                    />
                </Stack>
                <Stack width={isMobile ? "80%" : "100%"} mb={isMobile ? 3 : 4}>
                    <StyledForgotPassword onClick={handleForgotPassword}>
                        Forgot Password
                    </StyledForgotPassword>
                </Stack>
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    width={isMobile ? "80%" : "100%"}
                >
                    <CustomizedButton
                        color="secondary"
                        borderRadius="1.5rem"
                        fullWidth={true}
                        disabled={email.length === 0 || password.length === 0}
                        loading={isButtonLoading}
                        onClick={handleLogin}
                    >
                        Login
                    </CustomizedButton>
                </Stack>
            </Stack>
        </Stack>
    );
}
