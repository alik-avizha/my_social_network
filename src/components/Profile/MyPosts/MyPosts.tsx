import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi', likesCount: 13},
        {id: 2, message: 'I am beginner programmer', likesCount: 5},
        {id: 3, message: 'Here I are making my social network', likesCount: 25}
    ]

    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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
