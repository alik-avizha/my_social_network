import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import classes from './Profile.module.css';

type ProfilePropsType = {
    profile: ProfileType

}

const Profile = (props: ProfilePropsType) => {


    return (
        <div className={classes.profileWrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile
