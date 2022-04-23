import { Stack, useMediaQuery, useTheme} from '@mui/material';
import { StyledTitle, StyledSubtitle, StyledText } from './styles';
import forgotPasswordIllustration from "../../assets/images/forgotPasswordIllustration.svg";

import { CustomizedButton } from '../../shared/components/CustomizedButton';
import { CustomizedTextField } from '../../shared/components/CustomizedTextField';

import { useState } from 'react';



export default function ForgotPassord() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [email, setEmail] = useState("");

    const handleResetPassword: () => void = () => 1

    const handleEmail = (value: string) => {
        setEmail(value);
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
                        width= "90%"
                    />
                </Stack>
                <Stack
                    alignItems="center"
                    direction="column"
                    justifyContent="space-evenly"
                    spacing={isMobile ? 1 : 0.1}
                    sx={{
                        width:"40.0rem",
                        height:"30.0rem",
                        backgroundColor:'white',
                        borderRadius:"1.5rem",
                    }}
                >
                    <Stack
                        alignItems={isMobile ? "center" : "baseline"}
                        justifyContent="space-evenly"
                        width="90%"
                        sx={{
                            width:"30.0rem",
                            height:"4.0rem",
                            mb: 10,
                        }}
                    >
                        <StyledTitle>
                            FORGOT PASSWORD
                        </StyledTitle>
                        <StyledSubtitle>
                            Please, provide your account's email for which you want to reset your password
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
                        <StyledText>
                            Please enter your email
                        </StyledText>
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
                            onClick={handleResetPassword}
                        >
                            Cancel
                        </CustomizedButton>
                    </Stack>
                </Stack>
        </>
    )
}