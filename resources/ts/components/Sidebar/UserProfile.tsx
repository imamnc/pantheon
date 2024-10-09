import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { router } from '@inertiajs/react'
import LanguageSwitcher from "./LanguageSwitcher";

interface UserProfileProps { }

const UserProfile: React.FC<UserProfileProps> = () => {

    const { props }: any = usePage()

    return <>
        <div className="cursor-pointer symbol symbol-40px" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-start" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-dismiss="click" title="User profile">
            <img src="/assets/media/avatars/300-1.jpg" alt="image" />
        </div>

        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
            <div className="menu-item px-3">
                <div className="menu-content d-flex align-items-center px-3">
                    <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src="/assets/media/avatars/300-1.jpg" />
                    </div>
                    <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5" onClick={() => alert('oke')}>
                            {props.auth.user.name}
                            <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Active</span>
                        </div>
                        <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">{props.auth.user.email}</a>
                    </div>
                </div>
            </div>
            <div className="separator my-2" />
            <div className="menu-item px-5">
                <Link href="/dashboard" className="menu-link px-5">My Profile</Link>
            </div>
            <div className="menu-item px-5">
                <LanguageSwitcher></LanguageSwitcher>
            </div>
            <div className="menu-item px-5">
                <Link href="/logout" className="menu-link px-5">
                    Sign Out
                </Link>
            </div>
        </div>
    </>
}

export default UserProfile
