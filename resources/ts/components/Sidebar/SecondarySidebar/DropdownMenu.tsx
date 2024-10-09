import React, { ReactNode } from "react";

interface DropdownMenuProps {
    title: string,
    icon: ReactNode,
    children: ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, icon, children }) => {
    return <>
        <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
                <span className="menu-icon">
                    {icon}
                </span>
                <span className="menu-title">{title}</span>
                <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion">
                {children}
            </div>
        </div>
    </>
}

export default DropdownMenu
