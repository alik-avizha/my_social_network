import React from 'react';
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/loader.gif'

export const Preloader = () => {
    return (
        /*<div className={styles.preloader}></div>*/
        <img src={preloader} alt="preloader"/>
    );
};
