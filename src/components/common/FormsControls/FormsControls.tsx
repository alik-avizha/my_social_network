import React from 'react';
import classes from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import Checkbox from '@mui/material/Checkbox';
import {FieldValidatorType} from '../../../utils/validators/validators';

type FormControlProps = {
    /*input: {
        name: string;
    };*/
    meta: WrappedFieldMetaProps
};

export const FormControl: React.FC<FormControlProps> = (props) => {

    const {meta: {touched, error}, children} = props

    const hasError = touched && error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')} {...props}>
            <div>{children}</div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};
export const CheckboxWrapper: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <Checkbox {...input} {...restProps} />
        </FormControl>
    );
};

export function createField<T extends string>(placeholder: string,
                                              name: T,
                                              validators: FieldValidatorType[],
                                              component: React.FC<WrappedFieldProps>,
                                              props?: { type: string },
                                              text: string = '') {
    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', color: 'black'}}>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}/>
            {text}
        </div>
    )
}



