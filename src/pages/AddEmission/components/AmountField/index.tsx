import { CustomizedTextField } from "../../../../shared/components/CustomizedTextField";

interface AmountFieldProps {
    title: string;
    id: string;
    value: number;
    isMobile: boolean;
    onChange: (newValue: number) => void;
}
export function AmountField({
    title,
    id,
    value,
    isMobile,
    onChange,
}: AmountFieldProps) {
    return (
        <CustomizedTextField
            height={isMobile ? "3rem" : "auto"}
            customTextField
            title={title}
            id={id}
            value={value}
            onChange={(value) => onChange(value)}
        />
    );
}
