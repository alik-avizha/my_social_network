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
                {/*<img className={classes.img} src={'https://soft.sibnet.ru/data/screenshot/19091.jpg'} alt={'WorkPlace'}/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt={'avatar'} className={classes.imgAvatar}/>
                    : <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0tWNyZDN7-7a-G9uggn83aL_U-kbfne1sA&usqp=CAU'} alt={'avatar'} className={classes.imgAvatar}/>
                }
                <div>
                    <div className={classes.fullName}>{props.profile.fullName}</div>
                    <div className={classes.description}>
                        <span>{props.profile.aboutMe}</span>
                        <span>{props.profile.contacts.vk}</span>
                        <span>{props.profile.contacts.github}</span>
                        <span>{props.profile.contacts.instagram}</span>
                        <span>{props.profile.contacts.twitter}</span>
                        <span>{props.profile.contacts.facebook}</span>
                        <span>{props.profile.contacts.youtube}</span>
                        <span>{props.profile.lookingForAJob}</span>
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
