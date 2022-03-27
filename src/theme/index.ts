import { createTheme, responsiveFontSizes } from "@mui/material";

import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { spacing } from "./spacing";
import { typography } from "./typography";

const theme = createTheme({
    palette,
    spacing,
    breakpoints,
    typography,
});

export default responsiveFontSizes(theme);
