import React from "react"

const MenuGroup = ({ children }: any) => {
    return <>
        <div className="menu-item pt-5">
            <div className="menu-content">
                <span className="menu-heading fw-bold text-uppercase fs-7">
                    {children}
                </span>
            </div>
        </div>
    </>
}

export default MenuGroup
