import { Stack, useMediaQuery, useTheme } from '@mui/material';
import budgetIllustration from "../../assets/images/budgetPageIllustration.svg";
import { StyledTitle, StyledText } from './styles';

export default function Budget() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Stack
                    width="100%"
                    sx={{ position: "absolute", bottom: 0, zIndex: "-1" }}
                    >
                    <img
                        src={budgetIllustration}
                        alt="Budget illustration"
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
                    width:"34.0rem",
                    height:"38.0rem",
                    backgroundColor:'white',
                    borderRadius:"1.5rem",
                }}
            >
                <StyledTitle>
                    C02 consumption based on European standards
                </StyledTitle>
            </Stack>
        </>
    )

}