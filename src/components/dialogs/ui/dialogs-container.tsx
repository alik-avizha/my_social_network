import React from 'react';
import {addMessageActionCreator, DialogsPageType} from '../model/dialogs-reducer';
import {Dialogs} from './dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from 'app/model/redux-store';
import {withAuthRedirect} from 'common/hoc';

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    login: string | null
    photo: string
}
type MadDispatchToPropsType = {
    addMessage: (dialogsId: string, newMessageText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        login: state.auth.login,
        photo: state.profilePage.profile.photos.large
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MadDispatchToPropsType => {
    return {
        addMessage: (dialogsId: string, newMessageText: string) => {
            dispatch(addMessageActionCreator(dialogsId, newMessageText))
        }
    }
}

const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer