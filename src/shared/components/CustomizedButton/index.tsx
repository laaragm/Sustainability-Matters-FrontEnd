import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface CustomizedButtonProps {
    children: ReactNode;
    variant?: "text" | "outlined" | "contained";
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    borderRadius?: string;
}

export function CustomizedButton(
    {
        children,
        variant = "contained",
        color = "primary",
        borderRadius = "10px" }: CustomizedButtonProps
) {

    return (
        <Button color={color} variant={variant} sx={{ borderRadius: { borderRadius } }}>
            {children}
        </Button>
    )
}


