import React from 'react';
import classes from './Settings.module.css';
import works from '../../assets/images/work.jpg';

const Settings = () => {
    return (
        <div>
            <img src={works} alt="" className={classes.image}/>
        </div>
    );
};

export default Settings;