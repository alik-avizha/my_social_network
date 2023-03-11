import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Posts';
import {MyPostsPropsType} from '../../../index';




const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts
        .map(p=> <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts
