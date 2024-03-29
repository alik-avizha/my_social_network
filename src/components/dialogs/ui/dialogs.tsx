import React from 'react';
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item';
import {DialogsPageType} from '../model/dialogs-reducer';
import {Route, Switch} from 'react-router-dom';
import {Messages} from './messages/messages';
import messageIcon from '../../../assets/images/dialog.gif'
import {Typography} from "@mui/material";

type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: (id: string, newMessageText: string) => void
    login: string | null
    photo: string
}
export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((d, index) => <DialogItem name={d.name} id={d.id} key={index}/>)

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <Switch>
                    <Route path={'/dialogs/:id'} render={() => <Messages messages={props.dialogsPage.messages}
                                                                         addNewMessage={props.addMessage}
                                                                         login={props.login}
                                                                         names={props.dialogsPage.dialogs}
                                                                         photo={props.photo}
                    />}/>
                    <Route path="/dialogs" render={() => <div className={classes.choose}>
                        <img src={messageIcon} alt="message"/>
                        <Typography variant={"body1"}>Choose a dialog...</Typography>
                    </div>}/>
                </Switch>
            </div>
        </div>
    );
};