import { cloneElement, ReactElement } from "react";
import { Link, LinkProps } from "@mui/material";
import { useResolvedPath, useMatch } from "react-router-dom";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({
    shouldMatchExactHref = false,
    children,
    ...remainingLinkProps
}: ActiveLinkProps) {
    let resolved = useResolvedPath(remainingLinkProps.href || "/");
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link {...remainingLinkProps}>
            {cloneElement(children, {
                color: match ? "secondary" : "info",
            })}
        </Link>
    );
}
