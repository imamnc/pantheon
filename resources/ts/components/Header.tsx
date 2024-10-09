import React, { ReactNode } from "react";
import ThemeSwitcher from "./ThemeShitcher";
import { Link, usePage } from "@inertiajs/react";
import LanguageSwitcher from "./Sidebar/LanguageSwitcher";

interface HeaderProps {
    slot?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ slot }) => {

    const { props }: any = usePage()

    return <>
        <div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header"
            data-kt-sticky-offset="{default: '200px', lg: '300px'}">
            <div className="container-xxl d-flex align-items-center justify-content-between" id="kt_header_container">
                <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap mt-n5 mt-lg-0 me-lg-2 pb-2 pb-lg-0"
                    data-kt-swapper="true" data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                    <h1 className="text-dark fw-bold my-0 fs-2">{props.page_info.title}</h1>
                    <ul className="breadcrumb fw-semibold fs-base my-1">
                        <li className="breadcrumb-item text-muted">
                            <Link href="/" className="text-muted text-hover-primary">Home</Link>
                        </li>
                        {Object.keys(props.page_info.breadcrumbs).map((key, index) => (
                            <li key={index} className="breadcrumb-item text-muted">
                                <Link href={props.page_info.breadcrumbs[key]}>{key}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="d-flex d-lg-none align-items-center ms-n4 me-2">
                    <div className="btn btn-icon btn-active-icon-primary" id="kt_aside_mobile_toggle">
                        <i className="ki-duotone ki-abstract-14 fs-1">
                            <span className="path1" />
                            <span className="path2" />
                        </i>
                    </div>
                    <a href="/" className="d-flex align-items-center">
                        <img alt="Logo" src="/assets/media/logos/demo7.svg" className="h-30px" />
                    </a>
                </div>
                <div className="d-flex flex-shrink-0">
                    <div className="d-flex ms-3">
                        {slot}
                    </div>
                    <div className="d-flex align-items-center ms-3">
                        <ThemeSwitcher></ThemeSwitcher>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                        <div className="btn btn-icon btn-primary w-40px h-40px pulse pulse-white" id="kt_drawer_chat_toggle">
                            <i className="ki-duotone ki-message-text-2 fs-2">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                            </i>
                            <span className="pulse-ring" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Header
