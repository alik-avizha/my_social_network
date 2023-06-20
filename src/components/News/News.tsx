import classes from './News.module.css';
import works from '../../assets/images/work.jpg';
import React from 'react';

const News = () => {
    return (
        <div>
            <img src={works} alt="" className={classes.image}/>
        </div>
    );
};

export default News;