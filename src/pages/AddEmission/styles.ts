import { styled } from "@mui/material/styles";

interface StyledCardProps {
    isMobile: boolean;
}

export const StyledCard = styled("div")<StyledCardProps>(
    ({ theme, isMobile }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderRadius: "1.25rem",
        padding: isMobile ? 0 : "3rem",
        width: isMobile ? "90%" : "80%",
        height: isMobile ? "95%" : "85%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    })
);
