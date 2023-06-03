import React, {InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import classes from './FormsControls.module.css'

type FormControlProps<T> = {
    input: {
        name: string;
    };
    meta: {
        touched?: boolean;
        error?: string;
    }
    children: React.ReactNode
} & T;

export const FormControl = <T extends {}>({ input, meta, children, ...props }: FormControlProps<T>) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')} {...props}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export const Input: React.FC<InputProps & FormControlProps<InputProps>> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export const Textarea: React.FC<TextareaProps & FormControlProps<TextareaProps>> = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};


