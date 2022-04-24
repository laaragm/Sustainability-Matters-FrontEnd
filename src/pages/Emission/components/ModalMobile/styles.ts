import { styled } from "@mui/material/styles";

export const StyledCard = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderRadius: "1.25rem",
    padding: "2rem",
    position: "absolute",
    width: "90%",
    height: "85%",
}));

export const StyledTitle = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.main,
    fontSize: "1.5rem",
    lineHeight: "1.875rem",
    fontWeight: 700,
    "@media (max-width: 400px)": {
        fontSize: "1.1rem",
    },
}));
