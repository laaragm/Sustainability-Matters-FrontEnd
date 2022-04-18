import {Stack, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { CustomizedButton } from '../../shared/components/CustomizedButton';
import { CustomizedTextField } from '../../shared/components/CustomizedTextField';
import { StyledTitle } from './styles';

import signUpPageIllustration from "../../assets/images/signUpPageIllustration.svg";


export default function SignUp() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister: () => void = () => 1
    
    const handleFirstName = (value: string) => {
        setFirstName(value);
    };
    const handleLastName = (value: string) => {
        setLastname(value);
    };
    const handleEmail = (value: string) => {
        setEmail(value);
    };
    const handlePassword = (value: string) => {
        setPassword(value);
    };

    return (
        <>

            <Stack
                alignItems="center"
                direction="column"
                justifyContent="space-evenly"
                spacing={isMobile ? 1 : 0.1}
                sx={{
                    width:"32.0rem",
                    height:"34.0rem",
                    backgroundColor:'white',
                    borderRadius:"1.5rem",
                }}
            >
                 {!isMobile && (
                    <Stack
                        width="100%"
                        sx={{ position: "absolute", bottom: 0 }}
                        >
                        <img
                            src={signUpPageIllustration}
                            alt="Sing up page illustration"
                            height="100%"
                            width= "100%"
                        />
                    </Stack>
                 )}

                <Stack
                alignItems={isMobile ? "center" : "baseline"}
                justifyContent="space-evenly"
                width="90%"
                sx={{
                    width:"30.0rem",
                    height:"4.0rem",
                }}
                >
                    <StyledTitle>
                        CREAT YOUR ACCOUNT
                    </StyledTitle>
                </Stack>

                <Stack width="70%">
                    <CustomizedTextField
                        title="First Name"
                        id="first-name-field"
                        type="text"
                        value={firstName}
                        onChange={(value) => handleFirstName(value)}
                    />
                </Stack>

                <Stack width="70%">
                    <CustomizedTextField
                        title="Last Name"
                        id="last-name-field"
                        type="text"
                        value={lastName}
                        onChange={(value) => handleLastName(value)}
                    />
                </Stack>                

                <Stack width="70%">
                    <CustomizedTextField
                        title="Email"
                        id="email-field"
                        type="email"
                        value={email}
                        onChange={(value) => handleEmail(value)}
                    />
                </Stack>

                <Stack width="70%">
                    <CustomizedTextField
                        title="Password"
                        id="password-field-login"
                        type="password"
                        value={password}
                        onChange={(value) => handlePassword(value)}
                    />
                </Stack>

                <Stack width="40%" mt={20}>
                    <CustomizedButton
                        color="secondary"
                        borderRadius="0.3rem"
                        disabled={email.length === 0 || password.length === 0 || lastName.length === 0 || firstName.length === 0}
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