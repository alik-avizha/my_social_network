import React from 'react';
import classes from './my-posts.module.css';
import Post from './post/post';
import {AddItemForm} from 'common/components';
import {PostType} from '../../model/profile-reducer';

type MyPostsType = {
    posts: PostType[]
    addPost: (value: string) => void
    deletePost: (postId: string) => void
    photo: string
    userName: string
    changeLikesAndDislikes: (postId: string, name: string) => void
}

export const MyPosts = React.memo((props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post
        post={p}
        key={p.id}
        deletePost={props.deletePost}
        photo={props.photo}
        userName={props.userName}
        changeLikesAndDislikes={props.changeLikesAndDislikes}
    />)

    return (
        <div className={classes.postsBlock}>
            <AddItemForm callback={props.addPost} placeholder={'Enter your post'}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
})
