import { styled } from "@mui/material/styles";

export const StyledLabel = styled("div")(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    lineHeight: "1.25rem",
    fontWeight: 700,
    textTransform: "capitalize",
    "@media (max-width: 400px)": {
        fontSize: "0.9rem",
    },
}));

export const StyledValue = styled("div")(({ theme }) => ({
    color: theme.palette.warning.main,
    fontSize: "1rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
    textTransform: "capitalize",
    "@media (max-width: 400px)": {
        fontSize: "0.9rem",
    },
}));
