import React from 'react';
import {Header} from './header';
import {connect} from 'react-redux';
import {logoutThunkCreator} from '../../login/model/auth-reducer';
import {AppStateType} from 'app/model/redux-store';

type MapStateToProps = {
    isAuth: boolean,
    login: string | null
    photo: string
}
type MapDispatchTopProps = {
    logout: () => void
}

type PropsType = MapDispatchTopProps & MapStateToProps

export class HeaderContainerSecond extends React.Component<PropsType> {


    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
                photo={this.props.photo}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.profilePage.profile.photos.large
})

export const HeaderContainer = connect(mapStateToProps, {logout: logoutThunkCreator})(HeaderContainerSecond)
