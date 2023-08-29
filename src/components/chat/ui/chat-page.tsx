import React, {ChangeEvent, FC, KeyboardEvent, useEffect, useState} from 'react';
import s from './chat-page.module.css'
import {Button} from "common/components";
import {Typography} from "@mui/material";


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

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])


    return (
        <div>
            <ChatMessages wsChannel={wsChannel}/>
            <AddIMessageForm wsChannel={wsChannel}/>
        </div>
    )
}

const ChatMessages: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)])
        };
        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

    return (
        <div className={s.messages}>
            {messages?.map((m, index) => <ChatMessage key={index} photo={m.photo} userName={m.userName}
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

export const AddIMessageForm: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {

    const [value, setValue] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus('ready')
        };
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addNewMessage = () => {
        if (!value) {
            return
        }
        wsChannel?.send(value)
        setValue('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && addNewMessage()
    }

    const disableButton = wsChannel === null || readyStatus !== 'ready'

    return (
        <div className={s.addNewContentWrapper}>
            <textarea onKeyPress={onKeyPressHandler} placeholder={'send new message'}
                      value={value} onChange={onChangeHandler}/>
            <Button name={'send'} callback={addNewMessage} disabled={disableButton}/>
        </div>
    );
};