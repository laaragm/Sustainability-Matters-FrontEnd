import { styled } from "@mui/material/styles";

interface StyledTitleProps {
    isMobile: boolean;
}

export const StyledTitle = styled("span")<StyledTitleProps>(
    ({ theme, isMobile }) => ({
        fontWeight: 700,
        fontSize: isMobile ? "1.5rem" : "2rem",
        lineHeight: isMobile ? "1rem" : "1.25rem",
    })
);
