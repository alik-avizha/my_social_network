import React from 'react';
import {connect} from 'react-redux';
import {loginThunkCreator} from '../../redux/auth/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import styles from './login.module.css'
import {FormDataType, LoginReduxForm} from './loginForm/LoginForm';


type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMy)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.loginWrapper}>
            <span className={styles.title}>Login</span>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: loginThunkCreator,})(Login)
