import React, { useEffect, useState } from "react";

interface ChatListProps {
    selectRoomChat: (room_id: number) => void
}

const ChatList: React.FC<ChatListProps> = ({ selectRoomChat }) => {

    const [chatList, setChatList] = useState([
        {
            id: 1,
            isOnline: true,
            name: 'Kacun',
            lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            lastMessageReadStatus: false,
            lastMessageTime: '2024-01-18 12:00:00',
            totalUnreadMessage: 10
        },
        {
            id: 2,
            isOnline: false,
            name: 'Bocil',
            lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            lastMessageReadStatus: true,
            lastMessageTime: '2024-01-17 18:05:00',
            totalUnreadMessage: 0
        },
        {
            id: 3,
            isOnline: false,
            name: 'Dicky',
            lastMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            lastMessageReadStatus: true,
            lastMessageTime: '2024-01-16 19:00:00',
            totalUnreadMessage: 0
        },
    ])

    return <>
        <div className="card w-100 border-0 rounded-0 animate__animated animate__fadeIn" id="kt_drawer_chat_messenger">
            <div className="card-header bo rounded-0 pe-5" id="kt_drawer_chat_messenger_header">
                <div className="card-toolbar">
                    <div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
                        <i className="ki-duotone ki-arrow-left fs-2">
                            <span className="path1" />
                            <span className="path2" />
                        </i>
                    </div>
                    <h3 className="text-primary ms-5 mb-0"><strong>Agora Chats</strong></h3>
                </div>
            </div>
            <div className="card-body p-0" id="kt_drawer_chat_messenger_body">
                <div className="scroll-y me-n5" data-kt-element="messages" data-kt-scroll="true"
                    data-kt-scroll-activate="true" data-kt-scroll-height="auto"
                    data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                    data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                    <div className="px-5 py-4">
                        <input type="search" className="form-control" placeholder="Search..." />
                    </div>
                    <ul className="list-group rounded-0 list-chat">
                        {chatList.map((chat, index) => (
                            <li key={index} onClick={() => selectRoomChat(chat.id)} className="list-group-item">
                                <div className="chat-thumbnail"><img alt="Pic" src="/assets/media/avatars/300-25.jpg" /></div>
                                <div className="chat-content">
                                    <strong>{chat.name}</strong>
                                    {(chat.lastMessageReadStatus == false) ? (<p className="mb-0 text-dark fw-bold">{chat.lastMessage}</p>) : (<p className="mb-0 text-muted">{chat.lastMessage}</p>)}
                                </div>
                                {(chat.lastMessageReadStatus == false) && (<span className="badge badge-danger position-absolute">{chat.totalUnreadMessage}</span>)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default ChatList
