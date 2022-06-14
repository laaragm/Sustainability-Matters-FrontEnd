import { styled } from "@mui/material/styles";

export const StyledForgotPassword = styled("div")(({ theme }) => ({
    fontWeight: 750,
    fontSize: "0.85rem",
    lineHeight: "1rem",
    color: theme.palette.text.primary,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    "&:hover": {
        color: theme.palette.text.secondary,
        cursor: "pointer",
    },
}));
