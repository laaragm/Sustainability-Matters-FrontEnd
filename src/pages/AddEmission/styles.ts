import { styled } from "@mui/material/styles";

export const StyledCard = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderRadius: "1.25rem",
    padding: "3rem",
    width: "80%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledTitle = styled("span")(({ theme }) => ({
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "1.25rem",
}));
