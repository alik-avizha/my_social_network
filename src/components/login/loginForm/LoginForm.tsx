import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import classes from './loginForm.module.css';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';


export type FormDataType = {
    email: string
    password: string
    rememberMy: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
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
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <button className={classes.btn}>Login</button>
        </form>
    );
};
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)