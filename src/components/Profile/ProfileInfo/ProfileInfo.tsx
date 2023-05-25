import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/PreLoader/Preloader';
import {Description} from './ProfileDescription/Description';
import {ProfileAvatar} from './ProfileAvatar/ProfileAvatar';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
    profile: ProfileType
}



const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatarAndStatusBlock}>
                    <ProfileAvatar avatar={props.profile.photos.large}/>
                    <ProfileStatus status={'Все сложно'}/>
                </div>
                <Description profile={props.profile}/>
            </div>
        </div>
    )
}
export default ProfileInfo
