import { Link } from "@inertiajs/react";
import React from "react";

interface MenuImageProps {
    href: string,
    src: string,
    title: string,
    subtitle: string
}

const MenuImage: React.FC<MenuImageProps> = ({ href, src, title, subtitle }) => {
    return <>
        <Link href={href} className="custom-list d-flex align-items-center px-5 py-4">
            <div className="symbol symbol-40px me-5">
                <span className="symbol-label">
                    <img src={src} className="h-50 align-self-center" alt="thumbnail-menu" />
                </span>
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <h5 className="custom-list-title fw-semibold text-gray-800 mb-1">{title}</h5>
                <span className="text-gray-400 fw-bold">{subtitle}</span>
            </div>
        </Link>
    </>
}

export default MenuImage
