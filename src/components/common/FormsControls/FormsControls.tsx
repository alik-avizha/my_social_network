import React from 'react';
import classes from './FormsControls.module.css'
import {Field} from 'redux-form';

type FormControlProps = {
    input: {
        name: string;
    };
    meta: {
        touched?: boolean;
        error?: string;
    }
    children: React.ReactNode
};

export const FormControl: React.FC<FormControlProps> = (props) => {

    const {input, meta: {touched , error}, children} = props

    const hasError = touched && error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')} {...props}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Input: React.FC<FormControlProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

export const Textarea: React.FC<FormControlProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const createField = (placeholder: string,
                            name: string,
                            validators: any[],
                            component: React.FC<FormControlProps>,
                            props?: { type: string },
                            text: string = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}/>
            {text}
        </div>
    )
}



