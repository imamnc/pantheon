import React from "react";
import { DateFormatter } from "../../utils/DateFormatter";

interface ChatInInterface {
    chat: any
}

const ChatIn: React.FC<ChatInInterface> = ({ chat }) => {
    return <>
        <div className="d-flex justify-content-start mb-10">
            <div className="d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-2">
                    <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
                    </div>
                    <div className="ms-3">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">
                            {chat.name}
                        </a>
                        <span className="text-muted fs-7 mb-1">{DateFormatter.relativeTime(chat.created_at, 'DD-MM-YYYY')}</span>
                    </div>
                </div>
                <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text">
                    {chat.message}
                </div>
            </div>
        </div>
    </>
}

export default ChatIn
