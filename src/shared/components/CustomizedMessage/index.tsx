import {StyledText } from './styles';

interface CustomizedMessageProps {
    consumption: number;
    type: "day" | "month" | "year"
}

export function CustomizedMessage({consumption, type}: CustomizedMessageProps) {

    if(type === "day"){
        if(consumption < 500){
            return (
                <StyledText>
                    Your daily consumption is according to European standars
                </StyledText>
            );

        }
        if(consumption > 1000){
            return (
                <StyledText>
                    Your daily consumption is above European standars
                </StyledText>
            );

        }
        else{
            return (
                <StyledText>
                    Your daily consumption is according to European standars
                 </StyledText> 
            );

        }  
    }

    if(type === "month"){
        if(consumption < 500){
            return (
                <StyledText>
                    Your monthly consumption is according to European standars
                </StyledText> 
            );

        }
        if(consumption > 1000){
            return (
                <StyledText>
                    Your monthly consumption is above European standars
                </StyledText> 
            );

        }
        else{
            return (
                <StyledText>
                    Your monthly consumption is according to European standars
                </StyledText> 
            );

        } 
    }

    else {
        if(consumption < 500){
            return (
                <StyledText>
                    Your annualy consumption is according to European standars
                </StyledText> 
            );

        }

        if(consumption > 1000){
            return (
                <StyledText>
                    Your annualy consumption is above European standars
                </StyledText>  
            );
        }

        else{
            return (
                <StyledText>
                    Your annualy consumption is according to European standars
                </StyledText>   
            );

        } 

    }
}