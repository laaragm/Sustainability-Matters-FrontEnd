import { Box } from "@mui/material";

interface CustomizedBoxProps {
    color?: string;
}

export function CustomizedBox({color}: CustomizedBoxProps) {

    return (
        <Box
            sx={{
                width: 60,
                height: 60,
                backgroundColor: color,
                borderRadius:"2.0rem",
            }}
        />  
    );
}
