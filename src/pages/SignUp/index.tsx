import { Box, Stack, useTheme } from '@mui/material';
import { useState } from 'react';
import { CustomizedTextField } from '../../shared/components/CustomizedTextField';


export default function SignUp() {

    const theme = useTheme();
    const [email, setEmail] = useState("");

    const handleEmail = (value: string) => {
        setEmail(value);
    };



    return (
        <>
            <Stack
                sx={{
                    width:600,
                    height:630,
                    backgroundColor:'#ffffff',
                    borderRadius:"1.5rem",
                }}
            >
            <Stack>
                <CustomizedTextField

                    title="Email"
                    id="email-field-login"
                    type="email"
                    value={email}
                    onChange={(value) => handleEmail(value)}
                />

            </Stack>    



            </Stack>


        </>
    );
}