import React from 'react';
import classes from './Messages.module.css'
import {DialogItemType} from '../DialogItem/DialogItem';
import {useParams} from 'react-router-dom';
import {MyMessage} from './MainMessage/MainMessage';
import {FriendMessage} from './FriendMessage/FriendMessage';
import {SenderContent} from '../../common/SenderContent/SenderContent';

export type MessageItemType = {
    id: number
    message: string
    time: string
}

export type MessagesType = {
    [key: string]: MessageItemType[]
}

export type MessageItemPropsType = {
    messages: MessagesType
    addNewMessage: (id: string, newMessageText: string) => void
    login: string | null
    names: DialogItemType[]
    photo: string
}
export const Messages = (props: MessageItemPropsType) => {

    const params = useParams<{ id: string }>()

    const messagesForMap = props.messages[params.id].map((el, index) => el.id !== 0
        ? <FriendMessage key={index} message={el.message} name={props.names[Number(params.id) - 1].name} time={el.time}/>
        : <MyMessage key={index} message={el.message} name={props.login} time={el.time} photo={props.photo}/>
    )

    const addNewMessageHandler = (text: string) => {
        props.addNewMessage(params.id, text)
    }

    return (
        <div className={classes.messagesWrapper}>
            <div className={classes.messages}>
                {messagesForMap}
            </div>
            <SenderContent callback={addNewMessageHandler} placeholder={'Enter your post'}/>
        </div>
    )
}