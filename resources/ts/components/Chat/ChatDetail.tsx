import React, { useState } from "react";
import ChatIn from "./ChatIn";
import ChatOut from "./ChatOut";

interface ChatDetailProps {
    roomID: number,
    resetSelectedRoom: () => void
}

const ChatDetail: React.FC<ChatDetailProps> = ({ roomID, resetSelectedRoom }) => {

    // User online status
    const [selectedUser, setSelectedUser] = useState({
        id: 1,
        isOnline: true,
        name: 'John Doe'
    })

    // Chat data
    const [chatData, setChatData] = useState([
        {
            name: 'Kacun',
            type: 'out',
            created_at: '2024-01-17 13:00:00',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, commodi!'
        },
        {
            name: 'John Doe',
            type: 'in',
            created_at: '2024-01-16 13:00:00',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum officiis quis eveniet? Enim, possimus!'
        }
    ])

    return <>
        <div className="card w-100 border-0 rounded-0 animate__animated animate__fadeIn" id="kt_drawer_chat_messenger">
            <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
                <div className="card-title">
                    <div className="d-flex justify-content-center flex-column me-3">
                        <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">
                            {selectedUser.name} {roomID}
                        </a>
                        {(selectedUser.isOnline) ? (
                            <div className="mb-0 lh-1">
                                <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                                <span className="fs-7 fw-semibold text-muted">Online</span>
                            </div>
                        ) : (
                            <div className="mb-0 lh-1">
                                <span className="badge badge-secondary badge-circle w-10px h-10px me-1" />
                                <span className="fs-7 fw-semibold text-muted">Offline</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card-toolbar">
                    <div onClick={() => resetSelectedRoom()} className="btn btn-sm btn-icon btn-active-color-primary">
                        <i className="ki-duotone ki-cross-square fs-2">
                            <span className="path1" />
                            <span className="path2" />
                        </i>
                    </div>
                </div>
            </div>
            <div className="card-body" id="kt_drawer_chat_messenger_body">
                <div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true"
                    data-kt-scroll-activate="true" data-kt-scroll-height="auto"
                    data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                    data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                    {chatData.map((chat: any, index) => (
                        chat.type == 'in' ? <ChatIn key={index} chat={chat}></ChatIn> : <ChatOut key={index} chat={chat}></ChatOut>
                    ))}
                </div>
            </div>
            <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                <textarea className="form-control form-control-flush mb-3" rows={1} data-kt-element="input"
                    placeholder="Type a message" defaultValue={""} />
                <div className="d-flex flex-stack">
                    <div className="d-flex align-items-center me-2">
                        <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button"
                            data-bs-toggle="tooltip" title="Coming soon">
                            <i className="ki-duotone ki-paper-clip fs-3" />
                        </button>
                        <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button"
                            data-bs-toggle="tooltip" title="Coming soon">
                            <i className="ki-duotone ki-cloud-add fs-3">
                                <span className="path1" />
                                <span className="path2" />
                            </i>
                        </button>
                    </div>
                    <button className="btn btn-primary" type="button" data-kt-element="send">
                        Send
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default ChatDetail
