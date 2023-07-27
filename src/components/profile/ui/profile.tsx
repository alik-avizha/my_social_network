import React from 'react';
import ProfileInfo from './profile-info/profile-info';
import MyPostsContainer from './my-posts/my-posts-container';
import {ProfileType} from '../model/profile-reducer';
import classes from './profile.module.css';
import {ProfileDataFormPropsType} from './profile-info/profile-data-form';

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (value: File) => void
    saveProfile: (data: ProfileDataFormPropsType) => Promise<void | string>
}
const Profile = (props: PropsType) => {
    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    )
}
export default Profile
