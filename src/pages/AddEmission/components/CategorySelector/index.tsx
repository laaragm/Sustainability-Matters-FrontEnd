import { CustomizedSelectField } from "../../../../shared/components/CustomizedSelectField";

interface CategorySelectorProps {
    value: string;
    onChange: (newValue: string) => void;
}

const options = ["Transport", "Food", "Electricity"];

export function CategorySelector({ value, onChange }: CategorySelectorProps) {
    return (
        <CustomizedSelectField
            title="Select a category"
            id="category-field-add-emission"
            options={options}
            value={value}
            onChange={(newValue) => onChange(newValue)}
        />
    );
}
