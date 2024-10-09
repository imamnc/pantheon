import React, { ReactNode } from "react";
import SidebarFooter from "./SidebarFooter";
import { Link } from "@inertiajs/react";

interface PrimarySidebarProps {
    menu?: ReactNode
}

const PrimarySidebar: React.FC<PrimarySidebarProps> = ({ menu }) => {
    return <>
        <div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
            <div className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10"
                id="kt_aside_logo">
                <Link href="/dashboard">
                    <img alt="Logo" src="/assets/media/logos/demo7.svg" className="h-35px" />
                </Link>
            </div>
            <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0"
                id="kt_aside_nav">
                <div className="hover-scroll-overlay-y mb-5 scroll-ms px-5" data-kt-scroll="true"
                    data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
                    data-kt-scroll-wrappers="#kt_aside_nav" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                    data-kt-scroll-offset="0px">
                    <ul className="nav flex-column w-100" id="kt_aside_nav_tabs">
                        {menu}
                    </ul>
                </div>
            </div>
            <SidebarFooter></SidebarFooter>
        </div>
    </>
}

export default PrimarySidebar
