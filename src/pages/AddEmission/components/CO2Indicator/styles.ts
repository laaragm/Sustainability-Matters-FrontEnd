import { styled } from "@mui/material/styles";

export const StyledIndicator = styled("div")(({ theme }) => ({
    color: theme.palette.common.black,
    borderRadius: "22.5rem",
    boxSizing: "border-box",
    border: `1.25rem solid ${theme.palette.secondary.main}`,
    width: "70%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledValue = styled("div")(({ theme }) => ({
    fontWeight: 700,
    fontSize: "4.688rem",
    lineHeight: "1.25rem",
}));

export const StyledSubtitle = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1.563rem",
    lineHeight: "1.25rem",
}));
