import { Link } from "@inertiajs/react";
import React from "react";

interface PageLinkProps {
    children: string | React.ReactElement<any>;
    className?: string;
    active?: boolean;
    disabled?: boolean;
    href?: any;
    onClick?: (event: React.MouseEvent) => void;
}

const PageLink: React.FC<PageLinkProps> = (props) => {
    // Active / Disable komponen
    const customClassName = `page-link ${props.className} ${props.active ? 'active' : ''} ${props.disabled ? 'disabled' : ''}`

    if (props.disabled) {
        return <span className={customClassName} dangerouslySetInnerHTML={{ __html: props.children }}></span>
    }

    return (
        <Link className={customClassName} href={props.href}>
            <div dangerouslySetInnerHTML={{ __html: props.children }}></div>
        </Link>
    )
}

export default PageLink
