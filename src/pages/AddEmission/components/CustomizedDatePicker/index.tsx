import { TextField, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { StyledLabel } from "./styles";

interface DatePickerProps {
    value: string;
    onChange: (value: string) => void;
}

export function CustomizedDatePicker({ value, onChange }: DatePickerProps) {
    const theme = useTheme();

    const handleDate = (value: string) => {
        onChange(value);
    };

    return (
        <>
            <StyledLabel>Date</StyledLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={value}
                    // @ts-ignore
                    onChange={(value) => handleDate(value)}
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            sx={{
                                background: "rgba(51, 30, 130, 0.13)",
                                border: `1px solid ${theme.palette.secondary.main}`,
                                borderRadius: "0.5rem",
                            }}
                        />
                    )}
                />
            </LocalizationProvider>
        </>
    );
}
