import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataThunkCreator} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

type MapStateToProps = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchTopProps = {
    getAuthUserData: () => void
}

type HeaderContainerPropsType = MapDispatchTopProps & MapStateToProps

export class HeaderContainerSecond extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData: getAuthUserDataThunkCreator})(HeaderContainerSecond)
