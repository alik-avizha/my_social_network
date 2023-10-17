import React, {useEffect, useRef} from 'react';
import classes from './messages.module.css'
import {useParams} from 'react-router-dom';
import {MyMessage} from './my-message/my-message';
import {FriendMessage} from './friend-message/friend-message';
import {AddItemForm} from 'common/components';
import {DialogItemType, MessagesType} from "components/dialogs/model/dialogs-reducer";

export type PropsType = {
    messages: MessagesType
    addNewMessage: (id: string, newMessageText: string) => void
    login: string | null
    names: DialogItemType[]
    photo: string
}
export const Messages = (props: PropsType) => {
    const messagesBlock = useRef<HTMLDivElement>(null)
    const params = useParams<{ id: string }>()

    const messagesForMap = props.messages[params.id].map((el, index) => el.id !== 0
        ? <FriendMessage key={index} message={el.message} name={props.names[Number(params.id) - 1].name} time={el.time}/>
        : <MyMessage key={index} message={el.message} name={props.login} time={el.time} photo={props.photo}/>
    )

    useEffect(() => {
        messagesBlock.current?.scrollTo(0, messagesBlock.current.scrollHeight)
    }, [props.messages])

    const addNewMessageHandler = (text: string) => {
        props.addNewMessage(params.id, text)
    }

    return (
        <div className={classes.messagesWrapper}>
            <div  ref={messagesBlock} className={classes.messages}>
                {messagesForMap}
            </div>
            <div className={classes.addItemFormBlock}>
                <AddItemForm callback={addNewMessageHandler} placeholder={'Enter your message'}/>
            </div>
        </div>
    )
}