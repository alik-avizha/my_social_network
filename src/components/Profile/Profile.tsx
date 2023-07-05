import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile/profile-reducer';
import classes from './Profile.module.css';
import {ProfileDataFormPropsType} from './ProfileInfo/ProfileDataForm';

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (value: File) => void
    saveProfile: (data: ProfileDataFormPropsType) => Promise<void | string>
}

const Profile = (props: ProfilePropsType) => {
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
