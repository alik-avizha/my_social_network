import React from 'react';
import {addMessageActionCreator, DialogsPageType, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MadDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MadDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
