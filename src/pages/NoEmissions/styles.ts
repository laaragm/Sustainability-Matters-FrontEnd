
import { styled } from '@mui/material/styles';


export const StyledTitle = styled("div")(({ theme }) => ({
    fontWeight: 900,
    fontSize: "2rem",
    lineHeight: "5.5rem",
    color: theme.palette.text.secondary,
}));

export const StyledSubtitle = styled("div")(({ theme })=> ({
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "2rem",
    color: theme.palette.text.secondary,
    textAlign: "center",
    textJustify: "inter-word",
}));