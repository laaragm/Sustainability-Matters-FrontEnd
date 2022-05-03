import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { CustomizedButton } from "../../shared/components/CustomizedButton";
import { StyledSubtitle, StyledTitle } from "./styles";

import noEmissionsIllustration from "../../assets/images/noEmissionsIllustration.svg";

import { useNavigate } from "react-router-dom";

import { PATHS } from "../../routes/paths";

export default function NoEmissions() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    let navigate = useNavigate();

    const content = (
        <>
            <StyledTitle>Hi there 👋</StyledTitle>

            <StyledSubtitle>
                Thank you for your registration! Now you can start tracking your
                CO2 emissions.
            </StyledSubtitle>
        </>
    );

    const handleAddEmissions = () => {
        navigate(PATHS.addEmission.route);
    };

    return (
        <>
            <Stack
                alignItems="center"
                spacing={isMobile ? 3 : 8}
                m={isMobile ? 1 : 5}
            >
                {!isMobile && (
                    <Stack
                        width="100%"
                        sx={{ position: "absolute", bottom: 0 }}
                    >
                        <img
                            src={noEmissionsIllustration}
                            alt="No emissions page illustration"
                            height="100%"
                            width="100%"
                        />
                    </Stack>
                )}

                <Stack alignItems="center" width="65%" justifyContent="center">
                    {content}
                </Stack>
                <Stack justifyContent="center">
                    <CustomizedButton
                        color="secondary"
                        borderRadius="1.5rem"
                        fullWidth={false}
                        onClick={handleAddEmissions}
                    >
                        + Add emission
                    </CustomizedButton>
                </Stack>
            </Stack>
        </>
    );
}
