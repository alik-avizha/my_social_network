import React, {FC, useEffect, useState} from 'react';
import s from './chat-page.module.css'
import {AddItemForm} from "common/components";
import {Typography} from "@mui/material";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const ChatPage = () => {
    return (
        <div className={s.chatWrapper}>
            <Chat/>
        </div>
    );
};

export default ChatPage

const Chat = () => {
    const sendMessage = (newMessage: string) => {
        wsChannel.send(newMessage)
    }

    return (
        <div>
            <ChatMessages/>
            <AddItemForm callback={sendMessage} placeholder={'type new message'}/>
        </div>
    )
}

const ChatMessages = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            setMessages((prevMessages)=>[...prevMessages, ...JSON.parse(e.data)])
        })
    }, [])

    return (
        <div className={s.messages}>
            {messages?.map((m) => <ChatMessage key={m.userId} photo={m.photo} userName={m.userName}
                                               message={m.message}/>)}
        </div>
    )
}

type ChatMessagePropsType = {
    photo: string
    userName: string
    message: string
}
const ChatMessage: FC<ChatMessagePropsType> = ({photo, userName, message}) => {
    return (
        <div className={s.message}>
            <div className={s.imageAndText}>
                <img className={s.avatar} alt={'myAvatar'}
                     src={photo}
                />
                <div className={s.text}>
                    <div className={s.name}>
                        <Typography variant={"subtitle1"}>{userName}</Typography>
                    </div>
                    <pre className={s.messageText}>
                        <Typography variant={"body2"}>{message}</Typography>
                    </pre>
                </div>
            </div>
        </div>
    )
}