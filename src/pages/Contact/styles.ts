import { styled } from "@mui/material/styles";

export const StyledTitle = styled("div")(({ theme }) => ({
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "5.5rem",
    color: theme.palette.text.disabled,
    "@media (max-width: 1280px)": {
        fontSize: "3rem",
        lineHeight: "4rem",
    },
    "@media (max-width: 1080px)": {
        fontSize: "2.5rem",
        lineHeight: "3rem",
    },
    "@media (max-width: 400px)": {
        fontSize: "1.8rem",
        lineHeight: "3rem",
    },
}));

export const StyledSubtitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "0.8rem",
    lineHeight: "2rem",
    color: theme.palette.text.disabled,
    textAlign: "justify",
    textJustify: "inter-word",
    "@media (max-width: 1080px)": {
        fontSize: "1rem",
    },
}));
