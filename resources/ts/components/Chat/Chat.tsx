import React, { useState } from "react";
import { createPortal } from "react-dom";
import ChatList from "./ChatList";
import ChatDetail from "./ChatDetail";

interface ChatProps { }

interface ChatRoomState {
    room_id: number | null
}


const Chat: React.FC<ChatProps> = () => {

    const [selectedRoomChat, setSelectedRoomChat] = useState<ChatRoomState>({ room_id: null })

    const selectRoomChat = (room_id: number) => {
        setSelectedRoomChat({ room_id: room_id })
    }

    const resetSelectedRoomChat = () => {
        setSelectedRoomChat({ room_id: null })
    }

    return createPortal(
        <div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-permanent="true"
            data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}"
            data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle"
            data-kt-drawer-close="#kt_drawer_chat_close">
            {selectedRoomChat.room_id == null ?
                <ChatList selectRoomChat={selectRoomChat}></ChatList> :
                <ChatDetail resetSelectedRoom={resetSelectedRoomChat} roomID={selectedRoomChat.room_id}></ChatDetail>
            }
        </div>,
        document.body
    )
}

export default Chat
