import { Typography, useTheme } from "@mui/material";
import { CustomizedButton } from "../../shared/components/CustomizedButton";

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

            <CustomizedButton
                borderRadius="2rem"
                color="secondary"
                onClick={() => {}}
            >
                batata
            </CustomizedButton>
        </>
    );
}
