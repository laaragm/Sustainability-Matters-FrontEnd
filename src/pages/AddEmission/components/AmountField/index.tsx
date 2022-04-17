import { CustomizedTextField } from "../../../../shared/components/CustomizedTextField";

interface AmountFieldProps {
    title: string;
    id: string;
    value: number;
    onChange: (newValue: number) => void;
}
export function AmountField({ title, id, value, onChange }: AmountFieldProps) {
    return (
        <CustomizedTextField
            title={title}
            id={id}
            customTextField
            type="number"
            value={value}
            onChange={(value) => onChange(value)}
        />
    );
}
