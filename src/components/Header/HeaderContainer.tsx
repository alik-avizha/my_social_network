import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserDataAC} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

type MapStateToProps = {
    isAuth: boolean,
    login: string | null
}
type MapDispatchTopProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerPropsType = MapDispatchTopProps & MapStateToProps

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderContainer)
