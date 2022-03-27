import { CircularProgress } from "@mui/material";

import { RootStyle } from "./styles";

export function LoadingScreen({ ...other }) {
    return (
        <RootStyle {...other}>
            <CircularProgress color="success" />
        </RootStyle>
    );
}
