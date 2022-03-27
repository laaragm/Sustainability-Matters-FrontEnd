import { Button, Typography, useTheme } from "@mui/material";

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
        </>
    );
}
