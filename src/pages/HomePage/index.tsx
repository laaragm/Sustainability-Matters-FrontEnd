import { Typography, useTheme } from "@mui/material";
import { CustomizedButton } from "../../shared/components/CustomizedButton";

export default function HomePage() {
    const theme = useTheme();

    return (
        <>
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
