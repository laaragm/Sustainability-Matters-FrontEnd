import { CustomizedTextField } from "../../../../shared/components/CustomizedTextField";

interface TitleProps {
    value: string;
    isMobile: boolean;
    onChange: (value: string) => void;
}

export function Title({ value, isMobile, onChange }: TitleProps) {
    const handleTitle = (value: string) => {
        onChange(value);
    };

    return (
        <CustomizedTextField
            title="Title"
            id="title-field-add-emission"
            height={isMobile ? "3rem" : "auto"}
            customTextField
            type="text"
            value={value}
            onChange={(value) => handleTitle(value)}
        />
    );
}
