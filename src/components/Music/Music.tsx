import React from 'react';
import classes from './Music.module.css';
import works from '../../assets/images/work.jpg'

const Music = () => {
    return (
       <div className={classes.musicWrapper}>
           <img src={works} alt="" className={classes.image}/>
       </div>
    );
};

export default Music;