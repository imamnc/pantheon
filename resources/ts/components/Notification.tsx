import React from "react";
import { createPortal } from "react-dom";

export default function Notification() {
    return createPortal(
        <div id="kt_notifcations" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities"
            data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_notifcations_toggle" data-kt-drawer-close="#kt_notifcations_close">
            <div className="card shadow-none border-0 rounded-0">
                <div className="card-header" id="kt_notifcations_header">
                    <h3 className="card-title fw-bold text-dark">Notifications</h3>
                    <div className="card-toolbar">
                        <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                            id="kt_notifcations_close">
                            <i className="ki-duotone ki-cross fs-1">
                                <span className="path1" />
                                <span className="path2" />
                            </i>
                        </button>
                    </div>
                </div>
                <div className="card-body position-relative" id="kt_notifcations_body">
                    <div id="kt_notifcations_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true"
                        data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_notifcations_body"
                        data-kt-scroll-dependencies="#kt_notifcations_header, #kt_notifcations_footer"
                        data-kt-scroll-offset="5px">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-line w-40px" />
                                <div className="timeline-icon symbol symbol-circle symbol-40px">
                                    <div className="symbol-label bg-light">
                                        <i className="ki-duotone ki-flag fs-2 text-gray-500">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </i>
                                    </div>
                                </div>
                                <div className="timeline-content mb-10 mt-n2">
                                    <div className="overflow-auto pe-3">
                                        <div className="fs-5 fw-semibold mb-2">
                                            Invitation for crafting engaging designs that speak human
                                            workshop
                                        </div>
                                        <div className="d-flex align-items-center mt-1 fs-6">
                                            <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                                            <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip"
                                                data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                                                <img src="/assets/media/avatars/300-1.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer py-5 text-center" id="kt_notifcations_footer">
                    <a href="/" className="btn btn-bg-body text-primary">
                        View All Activities
                        <i className="ki-duotone ki-arrow-right fs-3 text-primary">
                            <span className="path1" />
                            <span className="path2" />
                        </i>
                    </a>
                </div>
            </div>
        </div>,
        document.body
    )
}
