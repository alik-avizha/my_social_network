import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.img} src={'https://soft.sibnet.ru/data/screenshot/19091.jpg'} alt={'WorkPlace'}/>
            </div>
            <div className={classes.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    )
}
export default ProfileInfo
