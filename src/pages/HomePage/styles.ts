import { styled } from "@mui/material/styles";

export const StyledTitle = styled("div")(({ theme }) => ({
    fontWeight: 700,
    fontSize: "4rem",
    lineHeight: "5.5rem",
    color: theme.palette.text.disabled,
}));

export const StyledSubtitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    color: theme.palette.text.disabled,
}));
