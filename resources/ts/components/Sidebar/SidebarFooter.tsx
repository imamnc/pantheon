import { Link } from "@inertiajs/react";
import React from "react";
import UserProfile from "./UserProfile";

const SidebarFooter: React.FC = () => {
    return <>
        <div className="aside-footer d-flex flex-column align-items-center flex-column-auto" id="kt_aside_footer">
            <div className="d-flex align-items-center mb-3">
                <div className="btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                    data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-start"
                    data-bs-toggle="tooltip" data-bs-placement="right" data-bs-dismiss="click" title="Notifications"
                    id="kt_notifcations_toggle">
                    <i className="ki-duotone ki-notification fs-2 fs-lg-1">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                    </i>
                </div>
            </div>
            <div className="d-flex align-items-center mb-10" id="kt_header_user_menu_toggle">
                <UserProfile></UserProfile>
            </div>
        </div>
    </>
}

export default SidebarFooter
