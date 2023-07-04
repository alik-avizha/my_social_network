import React from 'react';
import classes from './Button.module.css'


type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean

}

export const Button = (props: ButtonPropsType) => {
        return (
        <button className={classes.btn} onClick={props.callback} disabled={props.disabled ? props.disabled : false}>{props.name}</button>
    );
};
