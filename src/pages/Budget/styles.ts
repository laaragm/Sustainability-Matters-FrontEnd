import { styled } from "@mui/material/styles";

interface StyledCardProps {
    isMobile: boolean;
}

export const StyledTitle = styled("div")(({ theme }) => ({
    fontWeight: 750,
    fontSize: "1.15rem",
    lineHeight: "2.5rem",
    color: theme.palette.text.secondary,
    textAlign: "center",
}));

export const StyledSubtitle = styled("div")<StyledCardProps>(
    ({ theme, isMobile }) => ({
        fontWeight: 550,
        fontSize: isMobile ? "0.9rem" : "1rem",
        lineHeight: "2rem",
        color: theme.palette.text.secondary,
        textAlign: "left",
        textJustify: "inter-word",
    })
);

export const StyledText = styled("div")<StyledCardProps>(
    ({ theme, isMobile }) => ({
        fontWeight: 400,
        fontSize: isMobile ? "0.9rem" : "1rem",
        lineHeight: "2rem",
        color: theme.palette.grey[500],
        textAlign: "right",
        textJustify: "inter-word",
    })
);

export const StyledCard = styled("div")<StyledCardProps>(
    ({ theme, isMobile }) => ({
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        borderRadius: "1.25rem",
        padding: isMobile ? "1rem" : "3rem",
        width: isMobile ? "90%" : "40%",
        height: isMobile ? "90%" : "60%",
    })
);
