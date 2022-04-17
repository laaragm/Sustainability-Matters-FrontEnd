import { styled } from "@mui/material/styles";

interface StyledTextFieldProps {
    isMobile: boolean;
    customTextField: boolean;
}

export const StyledTextField = styled("input")<StyledTextFieldProps>(
    ({ theme, isMobile, customTextField }) => ({
        background: customTextField
            ? "rgba(51, 30, 130, 0.13)"
            : theme.palette.common.white,
        color: theme.palette.common.black,
        fontWeight: 400,
        border: customTextField
            ? `1px solid ${theme.palette.secondary.main}`
            : `1px solid ${theme.palette.common.black}`,
        borderRadius: customTextField ? "0.5rem" : 0,
        width: "100%",
        padding: isMobile ? "0.5rem" : "1rem",
        boxSizing: "border-box",
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
