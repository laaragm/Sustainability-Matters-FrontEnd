import { styled } from "@mui/material/styles";

export const StyledTitle = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
    fontSize: "1.5rem",
    "@media (max-width: 400px)": {
        fontSize: "1.1rem",
    },
}));
