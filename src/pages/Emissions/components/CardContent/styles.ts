import { styled } from "@mui/material/styles";

export const StyledDate = styled("div")(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "1.5rem",
    fontWeight: "bold",
    "@media (max-width: 400px)": {
        fontSize: "1.2rem",
    },
}));

export const StyledTitle = styled("div")(({ theme }) => ({
    color: theme.palette.text.secondary,
    textTransform: "capitalize",
    fontSize: "1rem",
    fontWeight: 500,
    "@media (max-width: 400px)": {
        fontSize: "0.9rem",
    },
}));

export const StyledDescription = styled("div")(({ theme }) => ({
    color: theme.palette.warning.main,
    fontWeight: 400,
    fontSize: "0.9rem",
    textTransform: "capitalize",
}));

export const StyledDivider = styled("hr")(({ theme }) => ({
    color: theme.palette.info.light,
    fontWeight: "bold",
    border: `1px solid ${theme.palette.info.light}`,
    boxSizing: "border-box",
    width: "100%",
}));

export const StyledImage = styled("img")(({ theme }) => ({
    cursor: "pointer",
}));
