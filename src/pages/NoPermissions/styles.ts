import { Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RootStyle = styled(Card)(({ theme }) => ({
    display: "flex",
    height: "60%",
    width: "50%",
    alignItems: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    borderRadius: "1rem",
}));

export const LabelStyle = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
}));

export const StyledTitle = styled("p")(({ theme }) => ({
    fontWeight: 750,
    fontSize: "2.5rem",
    lineHeight: "3rem",
    color: theme.palette.text.secondary,
}));

export const StyledDescription = styled("p")(({ theme }) => ({
    fontWeight: 750,
    fontSize: "1.2rem",
    lineHeight: "1rem",
    color: theme.palette.text.secondary,
}));
