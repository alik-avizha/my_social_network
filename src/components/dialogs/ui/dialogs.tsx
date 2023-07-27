import React from 'react';
import classes from './dialogs.module.css'
import DialogItem from './dialog-item/dialog-item';
import {DialogsPageType} from '../model/dialogs-reducer';
import {Route, Switch} from 'react-router-dom';
import {Messages} from './messages/messages';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (id: string, newMessageText: string) => void
    login: string | null
    photo: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map((d, index) => <DialogItem name={d.name} id={d.id} key={index}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
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
                    <Route path="/dialogs" render={() => <div className={classes.choose}><h3>Please select a dialog</h3></div>}/>
                </Switch>
            </div>
        </div>
    );
};