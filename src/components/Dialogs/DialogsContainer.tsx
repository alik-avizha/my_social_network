import React from 'react';
import {addMessageActionCreator, DialogsPageType} from '../../redux/dialogs/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

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