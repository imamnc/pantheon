import React from "react";

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    return <>
        <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
            <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-gray-400 fw-semibold me-1">
                        E-procurement System By
                    </span>
                    <a href="https://itpi.co.id" target="_blank"
                        className="text-muted text-hover-primary fw-semibold me-2 fs-6">
                        ITPI Technology
                    </a>
                </div>
                <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                        <a href="https://itpi.co.id" target="_blank" className="menu-link px-2">
                            About
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="https://itpi.co.id" target="_blank" className="menu-link px-2">
                            Support
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="https://itpi.co.id" target="_blank" className="menu-link px-2">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Footer