import React from 'react';
import classes from './music.module.css';
import workInProgressAnim from "assets/workInProgressAnim.json";
import Lottie from "lottie-react";
import {withAuthRedirect} from "common/hoc";
import {useWindowSize} from "common/hooks/useWindowSize";

const Music = () => {

    const { windowSize} = useWindowSize()

    const styles = windowSize < 600 ? {width : 250, height: 250} : {width: 500, height: 500}

    return (
        <div className={classes.musicWrapper}>
            <Lottie animationData={workInProgressAnim} style={styles} loop={true}/>
        </div>
    );
};

export default withAuthRedirect(Music);


