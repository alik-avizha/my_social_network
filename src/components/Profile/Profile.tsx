import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePage} from '../../redux/state';


type ProfilePagePropsType = {
    profilePage: ProfilePage
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
export default Profile
