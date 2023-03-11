import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePage} from '../../redux/state';


type ProfilePagePropsType = {
    state: ProfilePage
}

const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}
export default Profile
