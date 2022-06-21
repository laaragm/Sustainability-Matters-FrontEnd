import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import forgotPasswordIllustration from "../../assets/images/forgotPasswordIllustration.svg";
import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CustomizedTextField } from "../../shared/components/CustomizedTextField";
import { api } from "../../services/api";
import { PATHS } from "../../routes/paths";
import { StyledTitle, StyledSubtitle, StyledText } from "./styles";

export default function ForgotPassord() {
    let navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [email, setEmail] = useState("");

    const resetEmail = () => {
        setEmail("");
    };

    const checkIfEmailExists = async () => {
        const response = await api.get(`user/${email}`);
        if (response) {
            return true;
        }
        return false;
    };

    const handleResetPassword = async () => {
        try {
            const emailExists = await checkIfEmailExists();
            if (emailExists) {
                const response = await api.get(`sendEmail/${email}`);
                resetEmail();
                toast.success("Email sent successfully.");
            } else {
                toast.error("Email does not exist");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    const handleCancel = () => {
        navigate(PATHS.login.route);
    };

    return (
        <>
            <Stack
                width="100%"
                sx={{ position: "absolute", bottom: 0, zIndex: "-1" }}
            >
                <img
                    src={forgotPasswordIllustration}
                    alt="Forgot password illustration"
                    height="90%"
                    width="90%"
                />
            </Stack>
            <Stack
                alignItems="center"
                direction="column"
                justifyContent="space-evenly"
                spacing={isMobile ? 1 : 0.1}
                sx={{
                    width: "40.0rem",
                    height: "30.0rem",
                    backgroundColor: "white",
                    borderRadius: "1.5rem",
                }}
            >
                <Stack
                    alignItems={isMobile ? "center" : "baseline"}
                    justifyContent="space-evenly"
                    width="90%"
                    sx={{
                        width: "30.0rem",
                        height: "4.0rem",
                        mb: 10,
                    }}
                >
                    <StyledTitle>FORGOT PASSWORD</StyledTitle>
                    <StyledSubtitle>
                        Please, provide your account's email for which you want
                        to reset your password
                    </StyledSubtitle>
                </Stack>

                <Stack width="50%">
                    <CustomizedTextField
                        title="Email"
                        id="email-field"
                        type="email"
                        value={email}
                        onChange={(value) => handleEmail(value)}
                    />
                    <StyledText>Please enter your email</StyledText>
                </Stack>

                <Stack width="45%">
                    <CustomizedButton
                        color="secondary"
                        borderRadius="0.1rem"
                        fullWidth={true}
                        onClick={handleResetPassword}
                    >
                        Request reset my password
                    </CustomizedButton>
                    <CustomizedButton
                        color="secondary"
                        variant="text"
                        borderRadius="0.1rem"
                        fullWidth={true}
                        onClick={handleCancel}
                    >
                        Cancel
                    </CustomizedButton>
                </Stack>
            </Stack>
        </>
    );
}
