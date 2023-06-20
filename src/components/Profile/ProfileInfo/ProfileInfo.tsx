import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/PreLoader/Preloader';
import {Description} from './ProfileDescription/Description';
import {ProfileAvatar} from './ProfileAvatar/ProfileAvatar';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
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
                    {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <Description profile={props.profile}/>
            </div>
        </div>
    )
}
export default ProfileInfo
