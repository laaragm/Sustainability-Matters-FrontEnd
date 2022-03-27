import { Button, Typography, useTheme } from "@mui/material";
import { CustomizedButton } from '../../shared/components/CustomizedButton';

export default function HomePage() {
    const theme = useTheme();

    return (
        <>
            <Button color="primary" variant="contained">
                Click me
            </Button>
            <Typography
                variant="h6"
                sx={{ color: theme.palette.text.secondary }}
            >
                Test
            </Typography>

            <CustomizedButton borderRadius='40px'>
                batata
            </CustomizedButton>
        </>
    );
}
