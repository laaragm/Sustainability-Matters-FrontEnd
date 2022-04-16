import { CustomizedSelectField } from "../../../../shared/components/CustomizedSelectField";

interface CategorySelectorProps {
    value: string;
    options: string[];
    title: string;
    id: string;
    onChange: (newValue: string) => void;
}

export function CategorySelector({
    value,
    title,
    id,
    onChange,
    options,
}: CategorySelectorProps) {
    return (
        <CustomizedSelectField
            title={title}
            id={id}
            options={options}
            value={value}
            onChange={(newValue) => onChange(newValue)}
        />
    );
}
