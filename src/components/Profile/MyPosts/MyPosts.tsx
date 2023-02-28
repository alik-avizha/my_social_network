import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi' likeCount={13}/>
                <Post message='What do you do?' likeCount={15}/>
            </div>
        </div>
    )
}
export default MyPosts
