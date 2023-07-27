import React from 'react';
import classes from './button.module.css'

type PropsType = {
    name: string
    callback?: () => void
    disabled?: boolean
}
export const Button = (props: PropsType) => {
        return (
        <button className={classes.btn} onClick={props.callback} disabled={props.disabled ? props.disabled : false}>{props.name}</button>
    );
};
