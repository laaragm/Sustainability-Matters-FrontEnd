import { Stack, useTheme } from '@mui/material';
import { StyledSubtitle, StyledTitle } from './styles';

export default function NoEmissions() {
    const theme = useTheme();

    const content = (
        <>
            <StyledTitle>Hi there 👋</StyledTitle>

            <StyledSubtitle>
                Thank you for your registration!
                Now you can start tracking your CO2 emissions.
            </StyledSubtitle>    
        </> 
    );

    return (
        <>
            <Stack>
                {content} 
            </Stack>
        </>
    );
};