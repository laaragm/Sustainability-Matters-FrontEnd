import { Box } from "@mui/material";

interface CustomizedBoxProps {
    color?: string;
    width?: 120 | 240 | 320;
    consumption: number;
    type: "day" | "month" | "year"
}

export function CustomizedBox({color, width, consumption, type}: CustomizedBoxProps) {

    if(type === "day"){
        if(consumption < 500){
            return (
                <Box
                    sx={{
                        width: 120,
                        height: 40,
                        backgroundColor: "green",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }
        if(consumption > 1000){
            return (
                <Box
                    sx={{
                        width: 320,
                        height: 40,
                        backgroundColor: "red",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }
        else{
            return (
                <Box
                    sx={{
                        width: 240,
                        height: 40,
                        backgroundColor: "orange",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }  
    }

    if(type === "month"){
        if(consumption < 500){
            return (
                <Box
                    sx={{
                        width: 120,
                        height: 40,
                        backgroundColor: "green",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }
        if(consumption > 1000){
            return (
                <Box
                    sx={{
                        width: 320,
                        height: 40,
                        backgroundColor: "red",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }
        else{
            return (
                <Box
                    sx={{
                        width: 240,
                        height: 40,
                        backgroundColor: "orange",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        } 
    }

    else {
        if(consumption < 500){
            return (
                <Box
                    sx={{
                        width: 120,
                        height: 40,
                        backgroundColor: "green",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }

        if(consumption > 1000){
            return (
                <Box
                    sx={{
                        width: 320,
                        height: 40,
                        backgroundColor: "red",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        }

        else{
            return (
                <Box
                    sx={{
                        width: 240,
                        height: 40,
                        backgroundColor: "orange",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        } 

    }
}
