import React from 'react';
import classes from './Music.module.css';
import workIcon from '../../assets/images/work.svg'

const Music = () => {
    return (
        <div className={classes.musicWrapper}>
            <img className={classes.work} src={workIcon} alt=""/>
        </div>
    );
};

export default Music;


