import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://texterra.ru/upload/iblock/ac2/socialprev.jpg'}/>
            </div>
            <div className={classes.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    )
}
export default ProfileInfo
