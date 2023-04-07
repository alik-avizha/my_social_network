import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {Store} from 'redux';

type DialogsContainerPropsType = {
    store: Store
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage

    let addMessageHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChangeHandler = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs dialogsPage={state} addMessage={addMessageHandler} updateNewMessageText={onMessageChangeHandler}/>
    );
};

export default DialogsContainer;