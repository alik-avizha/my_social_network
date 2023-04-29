import React from 'react';
import loader from '../../../assets/images/loader.gif';

export const Preloader = () => {
    return (
        <div>
            <img alt={'preloader'} src={loader}/>
        </div>
    );
};
