import { styled } from "@mui/material/styles";

export const StyledTitle = styled("div")(({ theme }) => ({
    fontWeight: 750,
    fontSize: "1.15rem",
    lineHeight: "5.5rem",
    color: theme.palette.text.secondary,
}));
