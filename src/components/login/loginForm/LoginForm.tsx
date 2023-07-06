import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import classes from './loginForm.module.css';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';


export type FormDataType = {
    email: string
    password: string
    rememberMy: boolean
    captcha: string
}
type LoginFormOwnProp = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProp> & LoginFormOwnProp> = ({handleSubmit, error,captcha}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.formControl}>
            <div className={classes.email}>
                {createField('Email', 'email', [required], Input)}
            </div>
            <div className={classes.password}>
                {createField('Password', 'password', [required], Input, {type: 'password'})}
            </div>
            <div className={classes.rememberMy}>
                {createField('', 'rememberMy', [], Input, {type: 'checkbox'}, 'remember my')}
            </div>

            {captcha && <img src={captcha} alt={'captcha'}/> }
            {captcha && createField('Symbols from image', 'captcha', [required], Input) }

            {error && <div className={classes.formSummaryError}>{error}</div>}
            <button className={classes.btn}>Login</button>
        </form>
    );
};
export const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProp>({form: 'login'})(LoginForm)