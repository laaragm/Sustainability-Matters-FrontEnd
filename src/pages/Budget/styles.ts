import { styled } from '@mui/material/styles';


export const StyledTitle = styled("div")(({ theme }) => ({
    fontWeight: 750,
    fontSize: "1.15rem",
    lineHeight: "5.5rem",
    color: theme.palette.text.secondary,
}));

export const StyledSubtitle = styled("div")(({ theme })=> ({
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "2rem",
    color: theme.palette.grey[500],
    textAlign: "left",
    textJustify: "inter-word",
}));

export const StyledText = styled("div")(({ theme })=> ({
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "2rem",
    color: theme.palette.grey[500],
    textAlign: "left",
    textJustify: "inter-word",
}));