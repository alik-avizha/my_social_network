import React from 'react';
import {Header} from './header';
import {connect} from 'react-redux';
import {logoutThunkCreator} from '../../login/model/auth-reducer';
import {AppStateType} from 'app/model/redux-store';

type MapStateToProps = {
    isAuth: boolean,
    login: string | null
    photo: string
    authUserId: number | null
    profileUserId: number
}
type MapDispatchTopProps = {
    logout: () => void
}

type PropsType = MapDispatchTopProps & MapStateToProps

export class HeaderContainerSecond extends React.Component<PropsType> {


    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.profilePage.profile.photos.large,
    authUserId: state.auth.userId,
    profileUserId: state.profilePage.profile.userId
})

export const HeaderContainer = connect(mapStateToProps, {logout: logoutThunkCreator})(HeaderContainerSecond)
