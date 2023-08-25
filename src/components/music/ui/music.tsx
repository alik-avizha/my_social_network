import React from 'react';
import classes from './music.module.css';
import workInProgressAnim from "assets/workInProgressAnim.json";
import Lottie from "lottie-react";

const Music = () => {
    return (
        <div className={classes.musicWrapper}>
            <Lottie animationData={workInProgressAnim} style={{width: 500, height: 500}} loop={true}/>
        </div>
    );
};

export default Music;


