import { Select, MenuItem } from "@mui/material";
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

export const StyledSelect = styled(Select)(({ theme }) => ({
    background: "rgba(51, 30, 130, 0.13)",
    color: theme.palette.common.black,
    fontWeight: 400,
    width: "100%",
    boxSizing: "border-box",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "0.5rem",
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.common.black,
    fontWeight: 400,
}));
