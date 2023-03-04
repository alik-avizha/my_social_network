import React from "react";
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div  className={classes.content}>
            <div>
                <img src={'https://texterra.ru/upload/iblock/ac2/socialprev.jpg'}/>
            </div>
            <div>
                Avatar + description
            </div>
           <MyPosts />
        </div>
    )
}
export default Profile
