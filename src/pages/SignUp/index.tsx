import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { CustomizedTextField } from "../../shared/components/CustomizedTextField";
import signUpPageIllustration from "../../assets/images/signUpPageIllustration.svg";
import { api } from "../../services/api";
import { PATHS } from "../../routes/paths";
import { useAuth } from "../../hooks/useAuth";
import { StyledTitle } from "./styles";

export default function SignUp() {
    const theme = useTheme();
    let navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const { login } = useAuth();

    const containsOnlyLetters = (value: string) => {
        const isValid = /^[a-zA-Z]+$/.test(value);
        return isValid;
    };

    const emailIsInCorrectFormat = () => {
        if (
            email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) != null
        ) {
            return true;
        }
        return false;
    };

    const fieldsAreCorrect = () => {
        let result = true;
        const firstNameIsValid = containsOnlyLetters(firstName);
        const lastNameIsValid = containsOnlyLetters(lastName);
        const emailIsValid = emailIsInCorrectFormat();
        if (!firstNameIsValid) {
            toast.error("First name is not valid.");
            result = false;
        }
        if (!lastNameIsValid) {
            toast.error("Last name is not valid.");
            result = false;
        }
        if (!emailIsValid) {
            toast.error("Email is not valid.");
            result = false;
        }
        if (password !== passwordConfirmation) {
            toast.error("Password does not match Password Confirmation.");
            result = false;
        }
        return result;
    };

    const handleRegister = async () => {
        try {
            const fieldsAreValidated = fieldsAreCorrect();
            if (fieldsAreValidated) {
                setIsButtonLoading(true);
                const response = await api.post("/user/", {
                    email: email,
                    name: firstName,
                    last_name: lastName,
                    password: password,
                    consumption: [],
                });
                if (response != undefined) {
                    await login(email, password);
                    setIsButtonLoading(true);
                    navigate(PATHS.noEmissions.route);
                } else {
                    clearFields();
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const clearFields = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setIsButtonLoading(false);
    };

    const handleFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleLastName = (value: string) => {
        setLastName(value);
    };

    const handleEmail = (value: string) => {
        setEmail(value);
    };

    const handlePassword = (value: string) => {
        setPassword(value);
    };

    const handlePasswordConfirmation = (value: string) => {
        setPasswordConfirmation(value);
    };

    return (
        <>
            {!isMobile && (
                <Stack
                    width="100%"
                    sx={{ position: "absolute", bottom: 0, zIndex: "-1" }}
                >
                    <img
                        src={signUpPageIllustration}
                        alt="Sing up page illustration"
                        height="100%"
                        width="100%"
                    />
                </Stack>
            )}
            <Stack
                alignItems="center"
                direction="column"
                justifyContent="space-evenly"
                spacing={isMobile ? 1 : 0}
                width={isMobile ? "100%" : "50%"}
                height={isMobile ? "90%" : "80%"}
                mt={isMobile ? 5 : 0}
                sx={{
                    backgroundColor: "white",
                    borderRadius: isMobile ? 0 : "1.5rem",
                }}
            >
                <Stack
                    alignItems={isMobile ? "center" : "baseline"}
                    justifyContent="space-evenly"
                    width="90%"
                >
                    <StyledTitle>CREATE YOUR ACCOUNT</StyledTitle>
                </Stack>
                <Stack width="70%">
                    <CustomizedTextField
                        title="First Name"
                        id="first-name-field"
                        type="text"
                        height="45%"
                        value={firstName}
                        onChange={(value) => handleFirstName(value)}
                    />
                </Stack>
                <Stack width="70%">
                    <CustomizedTextField
                        title="Last Name"
                        id="last-name-field"
                        type="text"
                        height="45%"
                        value={lastName}
                        onChange={(value) => handleLastName(value)}
                    />
                </Stack>
                <Stack width="70%">
                    <CustomizedTextField
                        title="Email"
                        id="email-field"
                        type="email"
                        height="45%"
                        value={email}
                        onChange={(value) => handleEmail(value)}
                    />
                </Stack>
                <Stack width="70%">
                    <CustomizedTextField
                        title="Password"
                        id="password-field-login"
                        type="password"
                        height="45%"
                        value={password}
                        onChange={(value) => handlePassword(value)}
                    />
                </Stack>
                <Stack width="70%">
                    <CustomizedTextField
                        title="Password Confirmation"
                        id="password-confirmation-field-login"
                        type="password"
                        height="45%"
                        value={passwordConfirmation}
                        onChange={(value) => handlePasswordConfirmation(value)}
                    />
                </Stack>
                <Stack width="40%" pb={2}>
                    <CustomizedButton
                        variant="outlined"
                        color="secondary"
                        borderRadius="1.5rem"
                        loading={isButtonLoading}
                        disabled={
                            email.length === 0 ||
                            password.length === 0 ||
                            lastName.length === 0 ||
                            firstName.length === 0 ||
                            passwordConfirmation.length === 0
                        }
                        fullWidth={true}
                        onClick={handleRegister}
                    >
                        Register
                    </CustomizedButton>
                </Stack>
            </Stack>
        </>
    );
}
