import React, { ReactNode } from "react";

interface SecondarySidebarProps {
    menu?: ReactNode
}

const SecondarySidebar: React.FC<SecondarySidebarProps> = ({ menu }) => {
    return <>
        <div className="aside-secondary d-flex flex-row-fluid">
            <div className="aside-workspace my-5 p-5" id="kt_aside_wordspace">
                <div className="d-flex h-100 flex-column">
                    <div className="flex-column-fluid hover-scroll-y" data-kt-scroll="true" data-kt-scroll-activate="true"
                        data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_aside_wordspace"
                        data-kt-scroll-dependencies="#kt_aside_secondary_footer" data-kt-scroll-offset="0px">
                        <div className="tab-content">
                            {menu}
                        </div>
                    </div>
                    <div className="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">
                        <a href="https://preview.keenthemes.com/html/metronic/docs"
                            className="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                            data-bs-toggle="tooltip" data-bs-custom-class="tooltip-dark" data-bs-trigger="hover"
                            data-bs-offset="0,5" data-bs-dismiss-="click" title="Click to download manual book">
                            <span className="btn-label">Manual Book</span>
                            <i className="ki-duotone ki-document btn-icon fs-4 ms-3">
                                <span className="path1" />
                                <span className="path2" />
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SecondarySidebar
