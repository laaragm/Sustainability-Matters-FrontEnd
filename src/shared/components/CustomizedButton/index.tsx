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
    key?: string;
    onClick: () => void;
}

export function CustomizedButton({
    children,
    variant = "contained",
    color = "primary",
    borderRadius = "0",
    padding = "0.2rem 1.5rem",
    key,
    onClick,
}: CustomizedButtonProps) {
    const handleClick = () => {
        onClick();
    };

    return (
        <Button
            key={key}
            color={color}
            variant={variant}
            onClick={handleClick}
            sx={{
                borderRadius: borderRadius,
                textTransform: "capitalize",
                padding: padding,
            }}
        >
            {children}
        </Button>
    );
}
