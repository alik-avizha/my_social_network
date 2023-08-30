import React from 'react';
import classes from './news.module.css'
import workInProgressAnim from 'assets/workInProgressAnim.json'
import Lottie from "lottie-react";
import {useSelector} from "react-redux";
import {AppStateType} from "app/model/redux-store";
import {Redirect} from "react-router-dom";

const News = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (!isAuth) {
        return <Redirect to="/login"/>
    }

    return (
        <div className={classes.newsWrapper}>
            <Lottie animationData={workInProgressAnim} style={{width: 500, height: 500}} loop={true}/>
        </div>
    );
};

export default News;