import { ReactNode } from "react";
import { LoadingButton } from "@mui/lab";

interface CustomizedButtonProps {
    children: ReactNode;
    variant?: "text" | "outlined" | "contained";
    padding?: string;
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning";
    borderRadius?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    height?: string;
    onClick: () => void;
}

export function CustomizedButton({
    children,
    variant = "contained",
    color = "primary",
    borderRadius = "0",
    padding = "0.2rem 1.5rem",
    fullWidth = false,
    disabled = false,
    loading = false,
    height = "2rem",
    onClick,
}: CustomizedButtonProps) {
    const handleClick = () => {
        onClick();
    };

    return (
        <LoadingButton
            fullWidth={fullWidth}
            color={color}
            variant={variant}
            disabled={disabled}
            loading={loading}
            onClick={handleClick}
            sx={{
                borderRadius: borderRadius,
                textTransform: "capitalize",
                padding: padding,
                fontWeight: variant === "text" ? "bold" : "normal",
                height: height,
            }}
        >
            {children}
        </LoadingButton>
    );
}
