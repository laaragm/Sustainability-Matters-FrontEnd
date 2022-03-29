import { styled } from "@mui/material/styles";

export const MainStyle = styled("div")(({ theme }) => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 959px)": {
        marginTop: "10%",
        height: "90vh",
    },
}));
