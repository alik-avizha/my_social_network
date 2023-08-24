import React from 'react';
import classes from './button.module.css'

type PropsType = {
    name?: string
    callback?: () => void
    disabled?: boolean
    children?: React.ReactNode
    style?: {}
}
export const Button = (props: PropsType) => {
        return (
        <button style={props.style} className={classes.btn} onClick={props.callback} disabled={props.disabled ? props.disabled : false}>
            {props.name}
            {props.children}
        </button>
    );
};
