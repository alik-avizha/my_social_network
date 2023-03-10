import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi', likesCount: 13},
        {id: 2, message: 'I am beginner programmer', likesCount: 5},
        {id: 3, message: 'Here I are making my social network', likesCount: 25}
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
            </div>
        </div>
    )
}
export default MyPosts
