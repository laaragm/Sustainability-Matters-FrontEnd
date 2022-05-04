import { CustomizedTextField } from "../../../../shared/components/CustomizedTextField";

interface DatePickerProps {
    value: string;
    isMobile: boolean;
    onChange: (value: string) => void;
}

export function CustomizedDate({ value, isMobile, onChange }: DatePickerProps) {
    const handleDate = (value: string) => {
        onChange(value);
    };

    return (
        <CustomizedTextField
            title="Date (dd/mm/yyy)"
            id="date-field-add-emission"
            height={isMobile ? "3rem" : "auto"}
            customTextField
            type="text"
            value={value}
            onChange={(value) => handleDate(value)}
        />
    );
}
