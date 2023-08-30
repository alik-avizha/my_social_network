import React, {ChangeEvent, FC, KeyboardEvent, memo, UIEvent, useEffect, useRef, useState} from 'react';
import s from './chat-page.module.css'
import {Button} from "common/components";
import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    sendMessageThunkCreator,
    startMessagesListeningThunkCreator,
    stopMessagesListeningThunkCreator
} from "components/chat/model/chat-reducer";
import {AppStateType} from "app/model/redux-store";
import {Redirect} from "react-router-dom";


const ChatPage = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (!isAuth) {
        return <Redirect to="/login"/>
    }

    return (
        <div className={s.chatWrapper}>
            <Chat/>
        </div>
    );
};

export default ChatPage

const Chat = () => {
    const status = useSelector((state: AppStateType) => state.chat.status)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(startMessagesListeningThunkCreator())
        return () => {
            dispatch(stopMessagesListeningThunkCreator())
        }
    }, [])


    return (
        <div>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <>
                <ChatMessages />
                <AddIMessageForm/>
            </>
        </div>
    )
}

const ChatMessages = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const [isAutoScrollIsActive, setIsAutoScrollIsActive] = useState(true)

    useEffect(()=>{
        if (isAutoScrollIsActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    const onScrollHandler = (e: UIEvent<HTMLDivElement>) => {
         const element = e.currentTarget
         if ( Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
             !isAutoScrollIsActive && setIsAutoScrollIsActive(true)
         } else {
             isAutoScrollIsActive && setIsAutoScrollIsActive(false)
         }
    }

    return (
        <div className={s.messages} onScroll={onScrollHandler}>
            {messages?.map((m) => <ChatMessage key={m.id} photo={m.photo} userName={m.userName}
                                                      message={m.message}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

export type ChatMessagePropsType = {
    photo: string
    userName: string
    message: string
}
const ChatMessage: FC<ChatMessagePropsType> = memo(({photo, userName, message}) => {
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
})

export const AddIMessageForm = () => {

    const status = useSelector((state: AppStateType) => state.chat.status)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const addNewMessage = () => {
        if (!value) {
            return
        }
        dispatch(sendMessageThunkCreator(value))
        setValue('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && addNewMessage()
    }

    return (
        <div className={s.addNewContentWrapper}>
            <textarea onKeyPress={onKeyPressHandler} placeholder={'send new message'}
                      value={value} onChange={onChangeHandler}/>
            <Button name={'send'} callback={addNewMessage} disabled={status !== "ready"}/>
        </div>
    );
};