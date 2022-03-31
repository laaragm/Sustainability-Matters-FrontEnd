import { styled } from "@mui/material/styles";

export const StyledLabel = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: "1.5rem",
    color: theme.palette.text.secondary,
    "@media (max-width: 400px)": {
        fontSize: "1rem",
        lineHeight: "3rem",
    },
}));
