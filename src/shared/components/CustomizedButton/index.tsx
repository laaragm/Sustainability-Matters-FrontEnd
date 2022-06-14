import { Button } from "@mui/material";
import { ReactNode } from "react";

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
    height = "2.5rem",
    onClick,
}: CustomizedButtonProps) {
    const handleClick = () => {
        onClick();
    };

    return (
        <Button
            fullWidth={fullWidth}
            color={color}
            variant={variant}
            disabled={disabled}
            onClick={handleClick}
            sx={{
                borderRadius: borderRadius,
                textTransform: "capitalize",
                padding: padding,
                fontWeight: variant === "text" ? "bold" : "normal",
                height: height
            }}
        >
            {children}
        </Button>
    );
}
