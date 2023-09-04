import React from 'react';
import classes from './news.module.css'
import workInProgressAnim from 'assets/workInProgressAnim.json'
import Lottie from "lottie-react";
import {withAuthRedirect} from "common/hoc";

const News = () => {

    return (
        <div className={classes.newsWrapper}>
            <Lottie animationData={workInProgressAnim} style={{width: 500, height: 500}} loop={true}/>
        </div>
    );
};
export default withAuthRedirect(News);