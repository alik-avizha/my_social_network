import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi" likeCount={13}/>
                <Post message="What do you do?" likeCount={15}/>
            </div>
        </div>
    )
}
export default MyPosts
