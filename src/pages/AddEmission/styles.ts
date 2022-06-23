import { styled } from "@mui/material/styles";

interface StyledCardProps {
    isMobile: boolean;
}

export const StyledCard = styled("div")<StyledCardProps>(
    ({ theme, isMobile }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderRadius: "1.25rem",
        padding: "3rem",
        width: isMobile ? "90%" : "80%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1480px)": {
            padding: isMobile ? 0 : "1rem",
            height: "95%",
            marginTop: isMobile ? "2rem" : "5rem",
            marginBottom: "1rem",
            borderRadius: isMobile ? "1.25rem" : "1rem",
        },
    })
);
