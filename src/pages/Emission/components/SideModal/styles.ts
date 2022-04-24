import { styled } from "@mui/material/styles";

export const StyledCard = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderRadius: "1.25rem 0px 0px 1.25rem",
    padding: "3rem",
    right: 0,
    bottom: 0,
    position: "absolute",
    width: "15%",
    height: "93%",
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
