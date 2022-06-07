import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import forgotPasswordIllustration from "../../assets/images/forgotPasswordIllustration.svg";
import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CustomizedTextField } from "../../shared/components/CustomizedTextField";
import { PATHS } from "../../routes/paths";
import { StyledTitle, StyledSubtitle, StyledText } from "./styles";

export default function ChangePassword() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    let navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handlePasswordConfirmation = (value: string) => {
        setPasswordConfirmation(value);
    };

    // TODO: Implement this as soon as the endpoint is ready
    const handleChangePassword = () => {};

    const handleCancel = () => {
        navigate(PATHS.home.route);
    };

    return (
        <>
            <Stack
                width="100%"
                sx={{ position: "absolute", bottom: 0, zIndex: "-1" }}
            >
                <img
                    src={forgotPasswordIllustration}
                    alt="Change password illustration"
                    height="90%"
                    width="100%"
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
                >
                    <StyledTitle>CHANGE PASSWORD</StyledTitle>
                    <StyledSubtitle>
                        Please, enter the new password
                    </StyledSubtitle>
                </Stack>

                <Stack width="50%">
                    <CustomizedTextField
                        title="Password"
                        id="password-field"
                        type="password"
                        value={password}
                        onChange={(value) => handlePassword(value)}
                    />
                    <StyledText>Please enter the new password</StyledText>
                </Stack>

                <Stack width="50%">
                    <CustomizedTextField
                        title="Password Confirmation"
                        id="password-confirmation-field"
                        type="password"
                        value={passwordConfirmation}
                        onChange={(value) => handlePasswordConfirmation(value)}
                    />
                    <StyledText>Please confirm the password</StyledText>
                </Stack>

                <Stack width="45%">
                    <CustomizedButton
                        color="secondary"
                        borderRadius="0.1rem"
                        fullWidth={true}
                        disabled={
                            password.length === 0 ||
                            passwordConfirmation.length === 0 ||
                            passwordConfirmation !== password
                        }
                        onClick={handleChangePassword}
                    >
                        Save
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
