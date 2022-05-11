import { Box } from "@mui/material";

interface CustomizedBoxProps {
    color?: string;
    width?: 120 | 240 | 320;
}

export function CustomizedBox({color, width}: CustomizedBoxProps) {

    return (
        <Box
            sx={{
                width: width,
                height: 40,
                backgroundColor: color,
                borderRadius:"2.0rem",
            }}
        />  
    );
}
