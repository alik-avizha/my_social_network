import React from 'react';
import classes from './Music.module.css';

const Music = () => {
    return (
        <div className={classes.music}>
            <h2 className={classes.title}>Музыка</h2>
            <div className={classes.track}>
                <div className={classes.info}>
                    <span className={classes.artist}>Исполнитель</span>
                    <span className={classes.name}>Название трека</span>
                </div>
                <div className={classes.controls}>
                    <button className={classes.controlBtn}>
                        <span className="material-icons">play_arrow</span>
                    </button>
                    <button className={classes.controlBtn}>
                        <span className="material-icons">pause</span>
                    </button>
                    <button className={classes.controlBtn}>
                        <span className="material-icons">favorite_border</span>
                    </button>
                </div>
            </div>
            <div className={classes.track}>
                <div className={classes.info}>
                    <span className={classes.artist}>Исполнитель</span>
                    <span className={classes.name}>Название трека</span>
                </div>
                <div className={classes.controls}>
                    <button className={classes.controlBtn}>
                        <span className="material-icons">play_arrow</span>
                    </button>
                    <button className={classes.controlBtn}>
                        <span className="material-icons">pause</span>
                    </button>
                    <button className={classes.controlBtn}>
                        <span className="material-icons">favorite_border</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Music;