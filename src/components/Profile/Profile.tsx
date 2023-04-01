import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, ProfilePage} from '../../redux/state';

type ProfilePagePropsType = {
    profilePage: ProfilePage
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile
