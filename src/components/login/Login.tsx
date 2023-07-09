import React from 'react';
import {connect} from 'react-redux';
import {loginThunkCreator} from '../../redux/auth/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../redux/redux-store';
import styles from './login.module.css'
import {FormDataType, LoginReduxForm} from './loginForm/LoginForm';

type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMy, formData.captcha)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.loginWrapper}>
            <span className={styles.title}>Login</span>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    );
};

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    captcha: state.auth.captcha,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: loginThunkCreator,})(Login)
