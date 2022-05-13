import { Box } from "@mui/material";

interface CustomizedBoxProps {
    consumption: number;
    type: "day" | "month" | "year"
}

export function CustomizedBox({consumption, type}: CustomizedBoxProps) {

    if(type === "day"){
        if(consumption < 500){
            return (
                <Box
                    sx={{
                        width: "4.0rem",
                        height: "2.5rem",
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
                        width: "17.0rem",
                        height: "2.5rem",
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
                        width: "11.0rem",
                        height: "2.5rem",
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
                        width: "4.0rem",
                        height: "2.5rem",
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
                        width: "17.0rem",
                        height: "2.5rem",
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
                        width: "11.0rem",
                        height: "2.5rem",
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
                        width: "4.0rem",
                        height: "2.5rem",
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
                        width: "17.0rem",
                        height: "2.5rem",
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
                        width: "11.0rem",
                        height: "2.5rem",
                        backgroundColor: "orange",
                        borderRadius:"2.0rem",
                    }}
                />  
            );

        } 

    }
}
