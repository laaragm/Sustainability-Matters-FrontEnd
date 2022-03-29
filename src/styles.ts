import { styled } from "@mui/material/styles";

export const MainStyle = styled("div")(({ theme }) => ({
    height: "100%",
    width: "100%",
    marginTop: "5%",
    boxSizing: "border-box",
    "@media (max-width: 1280px)": {
        marginTop: "10%",
    },
    "@media (max-width: 800px)": {
        marginTop: "15%",
    },
    "@media (max-width: 600px)": {
        marginTop: "20%",
    },
}));
