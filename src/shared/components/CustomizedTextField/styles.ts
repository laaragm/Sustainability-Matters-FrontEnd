import { styled } from "@mui/material/styles";

interface StyledTextFieldProps {
    isMobile: boolean;
}

export const StyledTextField = styled("input")<StyledTextFieldProps>(
    ({ theme, isMobile }) => ({
        background: theme.palette.common.white,
        width: "100%",
        padding: isMobile ? "0.5rem" : "1rem",
        boxSizing: "border-box",
        border: `1px solid ${theme.palette.common.black}`,
        "& > div:after": {
            border: "none",
        },
    })
);

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
