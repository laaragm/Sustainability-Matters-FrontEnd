import { styled } from "@mui/material/styles";

interface StyledIndicatorProps {
    isMobile: boolean;
}

export const StyledIndicator = styled("div")<StyledIndicatorProps>(
    ({ theme, isMobile }) => ({
        color: theme.palette.common.black,
        borderRadius: "22.5rem",
        boxSizing: "border-box",
        border: isMobile
            ? `0.7rem solid ${theme.palette.secondary.main}`
            : `1.25rem solid ${theme.palette.secondary.main}`,
        width: "75%",
        height: "85%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1480px)": {
            width: isMobile ? "90%" : "85%",
            height: isMobile ? "20%" : "65%",
        },
    })
);

export const StyledValue = styled("div")<StyledIndicatorProps>(
    ({ theme, isMobile }) => ({
        fontWeight: 700,
        fontSize: isMobile ? "1.1rem" : "4.688rem",
        lineHeight: "1.25rem",
    })
);

export const StyledSubtitle = styled("div")<StyledIndicatorProps>(
    ({ theme, isMobile }) => ({
        fontWeight: 400,
        fontSize: isMobile ? "0.9rem" : "1.563rem",
        lineHeight: "1.25rem",
    })
);
