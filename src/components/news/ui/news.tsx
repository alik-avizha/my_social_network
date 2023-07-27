import React from 'react';
import classes from './news.module.css'
import workIcon from '../../../assets/images/work.svg';

const News = () => {
    return (
        <div className={classes.newsWrapper}>
            <img className={classes.work} src={workIcon} alt=""/>
        </div>
    );
};

export default News;