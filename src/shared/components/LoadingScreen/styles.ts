import { styled } from "@mui/material/styles";

export const RootStyle = styled("div")(({ theme }: any) => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0CCA98", // TODO: Remove hardcoded color
}));
