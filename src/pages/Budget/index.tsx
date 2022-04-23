import { Stack } from '@mui/material';
import budgetIllustration from "../../assets/images/budgetPageIllustration.svg";
import { StyledTitle, StyledText } from './styles';

export default function Budget() {

    return (
        <>
            <Stack
                    width="100%"
                    sx={{ position: "absolute", bottom: 0, zIndex: "-1" }}
                    >
                    <img
                        src={budgetIllustration}
                        alt="Budget illustration"
                        height="90%"
                        width= "90%"
                    />
            </Stack>
        </>
    )

}