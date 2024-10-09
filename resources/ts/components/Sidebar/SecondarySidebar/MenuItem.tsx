import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface MenuItemProps {
    href: string,
    icon?: ReactNode,
    children: ReactNode,
    linkClass?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ href, icon, children, linkClass }) => {
    return <>
        <div className="menu-item">
            <Link className={clsx(
                "menu-link",
                (linkClass ? linkClass : ''),
            )} href={href}>
                {(icon ?
                    (<span className="menu-icon">
                        {icon}
                    </span>) :
                    (<span className="menu-bullet">
                        <span className="bullet bullet-dot" />
                    </span>)
                )}
                <span className="menu-title">{children}</span>
            </Link>
        </div>
    </>
}

export default MenuItem
