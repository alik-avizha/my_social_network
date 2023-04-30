import React from "react";
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/PreLoader/Preloader';

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={classes.img} src={'https://soft.sibnet.ru/data/screenshot/19091.jpg'} alt={'WorkPlace'}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'avatar'}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo
