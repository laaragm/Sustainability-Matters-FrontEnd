import { Box, Stack, useTheme } from '@mui/material';
import { useState } from 'react';
import { CustomizedButton } from '../../shared/components/CustomizedButton';
import { CustomizedTextField } from '../../shared/components/CustomizedTextField';
import { StyledTitle } from './styles';


export default function SignUp() {

    const theme = useTheme();
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
                spacing={2}
                sx={{
                    width:600,
                    height:630,
                    backgroundColor:'white',
                    borderRadius:"1.5rem",
                }}
            >
                <Stack
                alignItems="baseline"
                width="90%"
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