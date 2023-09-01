import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import classes from './login-form.module.css';
import {CheckboxWrapper, createField, Input} from 'common/components';
import {required} from 'common/utils';
import {FormLabel, Typography} from '@mui/material';


export type FormDataType = {
    email: string
    password: string
    rememberMy: boolean
    captcha: string
}
type LoginFormOwnProps = {
    captcha: string | null
}
type LoginFormKeyValuesType = keyof FormDataType
const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                       handleSubmit,
                                                                                                       error,
                                                                                                       captcha
                                                                                                   }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.formControl}>
            <FormLabel className={classes.formLabel}>
                <Typography>
                    To log in get registered <a className={classes.link} href={'https://social-network.samuraijs.com/'}
                                                target={'_blank'} rel="noreferrer">here</a>
                </Typography>
                <Typography>
                    or use common test account credentials:
                </Typography>
                <Typography> Email: free@samuraijs.com
                </Typography>
                <Typography>
                    Password: free
                </Typography>
            </FormLabel>
            <div className={classes.email}>
                {createField<LoginFormKeyValuesType>('Email', 'email', [required], Input)}
            </div>
            <div className={classes.password}>
                {createField<LoginFormKeyValuesType>('Password', 'password', [required], Input, {type: 'password'})}
            </div>
            <div className={classes.rememberMy}>
                {createField<LoginFormKeyValuesType>('', 'rememberMy', [], CheckboxWrapper, {type: 'checkbox'}, 'remember my')}
            </div>
            {captcha && <img className={classes.captcha} src={captcha} alt={'captcha'}/>}
            {captcha && createField<LoginFormKeyValuesType>('Symbols from image', 'captcha', [required], Input)}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <button className={classes.btn}>Login</button>
        </form>
    );
};
export const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)