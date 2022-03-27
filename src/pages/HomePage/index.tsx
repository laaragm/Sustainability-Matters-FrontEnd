import { Typography, useTheme } from "@mui/material";

export default function HomePage() {
    const theme = useTheme();

    return (
        <>
            <Typography
                variant="h6"
                sx={{ color: theme.palette.text.secondary }}
            >
                Test
            </Typography>
        </>
    );
}
