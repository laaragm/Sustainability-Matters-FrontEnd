import { styled } from "@mui/material/styles";

export const StyledText = styled("div")(({ theme }) => ({
    fontWeight: "600",
    fontSize: "0.95rem",
    lineHeight: "1.2rem",
    color: theme.palette.text.secondary,
}));
