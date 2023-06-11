import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logoutThunkCreator} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

type MapStateToProps = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchTopProps = {
    logout: () => void
}

type HeaderContainerPropsType = MapDispatchTopProps & MapStateToProps

export class HeaderContainerSecond extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {logout: logoutThunkCreator})(HeaderContainerSecond)
