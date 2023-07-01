import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {PostFormSender} from './PostFormSender/PosFormSender';

type MyPostsType = {
    posts: PostType[]
    addPost: (value: string) => void
    deletePost: (postId: string) => void
    photo: string
}

export const MyPosts = React.memo((props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}
                                                     key={p.id} deletePost={props.deletePost} id={p.id} photo={props.photo}/>)

    return (
        <div className={classes.postsBlock}>
            <PostFormSender callback={props.addPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
})
