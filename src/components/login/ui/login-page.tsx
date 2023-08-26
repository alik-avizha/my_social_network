import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginThunkCreator} from '../model/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from 'app/model/redux-store';
import styles from './login.module.css'
import {FormDataType, LoginReduxForm} from './login-form/login-form';

const LoginPage = () => {

    const captcha = useSelector((state: AppStateType) => state.auth.captcha)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMy, formData.captcha))
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.loginWrapper}>
            <span className={styles.title}>Login</span>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </div>
    );
};

export default LoginPage

