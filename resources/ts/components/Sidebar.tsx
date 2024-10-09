import React, { ReactNode } from "react"
import PrimarySidebar from "./Sidebar/PrimarySidebar"
import SecondarySidebar from "./Sidebar/SecondarySidebar"
import MenuGroup from "./Sidebar/SecondarySidebar/MenuGroup"
import DropdownMenu from "./Sidebar/SecondarySidebar/DropdownMenu"
import MenuItem from "./Sidebar/SecondarySidebar/MenuItem"
import MenuImage from "./Sidebar/SecondarySidebar/MenuImage"

// Primary Sidebar Menu
const PrimarySidebarMenu: ReactNode = <>
    <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover"
        data-bs-placement="right" data-bs-dismiss="click" title="Vendor Management">
        <a className="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light active"
            data-bs-toggle="tab" href="#vms">
            <i className="ki-duotone ki-briefcase fs-2x">
                <span className="path1" />
                <span className="path2" />
            </i>
        </a>
    </li>

    <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover"
        data-bs-placement="right" data-bs-dismiss="click" title="Tender Management">
        <a className="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
            data-bs-toggle="tab" href="#tender">
            <i className="ki-duotone ki-element-11 fs-2x">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
            </i>
        </a>
    </li>
</>

// Secondary Sidebar Menu
const SecondarySidebarMenu: ReactNode = <>
    <div className="tab-pane fade active show" id="vms" role="tabpanel">
        <div className="menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold fs-5 px-6 my-5 my-lg-0"
            id="kt_aside_menu" data-kt-menu="true">
            <div id="kt_aside_menu_wrapper" className="menu-fit">

                <MenuGroup>MENU GROUP 1</MenuGroup>
                <DropdownMenu title="CRUD Example" icon={<i className="fa fa-database"></i>}>
                    <DropdownMenu title="Master Data" icon={ <i className="fa fa-book-open"></i> }>
                        <MenuItem linkClass="ms-5" href="/master/country">Master Country</MenuItem>
                        <MenuItem linkClass="ms-5" href="/master/province">Master Province</MenuItem>
                        <MenuItem linkClass="ms-5" href="/master/currency">Master Currency</MenuItem>
                    </DropdownMenu>
                    <MenuItem href="/manage-news">Manage News</MenuItem>
                </DropdownMenu>

                <MenuGroup>MENU GROUP 2</MenuGroup>
                <MenuItem href="/sub2" icon={<i className="ki-duotone ki-abstract-26 fs-2"><span className="path1" /><span className="path2" /></i>}>Menu 1</MenuItem>
                <MenuItem href="/sub2" icon={<i className="ki-duotone ki-code fs-2"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>}>Menu 2</MenuItem>
                <MenuItem href="/sub3" icon={<i className="fa fa-database"></i>}>Menu 3</MenuItem>

            </div>
        </div>
    </div>

    <div className="tab-pane fade" id="tender" role="tabpanel">
        <div className="m-0">
            <div className="m-0">
                <h1 className="text-gray-800 fw-semibold mb-6 mx-5">
                    Tender Management
                </h1>
                <div className="mb-10">
                    <MenuImage href="/dashboard" src="/assets/media/svg/brand-logos/bebo.svg" title="Tender 1" subtitle="Lorem ipsum dolor sit amet."></MenuImage>
                    <MenuImage href="/dashboard" src="/assets/media/svg/brand-logos/vimeo.svg" title="Tender 2" subtitle="Lorem ipsum dolor sit."></MenuImage>
                </div>
            </div>
        </div>
    </div>
</>

// Main Sidebar
const Sidebar: React.FC = () => {
    return <>
        <div id="kt_aside" className="aside aside-extended" data-kt-drawer="true" data-kt-drawer-name="aside"
            data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto"
            data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">

            <PrimarySidebar menu={PrimarySidebarMenu}></PrimarySidebar>

            <SecondarySidebar menu={SecondarySidebarMenu}></SecondarySidebar>

            <button id="kt_aside_toggle"
                className="aside-toggle btn btn-sm btn-icon bg-body btn-color-gray-700 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex mb-5"
                data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
                data-kt-toggle-name="aside-minimize">
                <i className="ki-duotone ki-arrow-left fs-2 rotate-180">
                    <span className="path1" />
                    <span className="path2" />
                </i>
            </button>
        </div>
    </>
}

export default Sidebar
