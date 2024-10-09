import React from "react";
import { DateFormatter } from "../../utils/DateFormatter";

interface ChatOutInterface {
    chat: any
}

const ChatOut: React.FC<ChatOutInterface> = ({ chat }) => {
    return <>
        <div className="d-flex justify-content-end mb-10">
            <div className="d-flex flex-column align-items-end">
                <div className="d-flex align-items-center mb-2">
                    <div className="me-3">
                        <span className="text-muted fs-7 mb-1">{DateFormatter.relativeTime(chat.created_at, 'DD-MM-YYYY')}</span>
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">
                            You
                        </a>
                    </div>
                    <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="/assets/media/avatars/300-1.jpg" />
                    </div>
                </div>
                <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text">
                    {chat.message}
                </div>
            </div>
        </div>
    </>
}

export default ChatOut
