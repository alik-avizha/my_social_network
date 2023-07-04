import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {SenderContent} from '../../common/SenderContent/SenderContent';
import {PostType} from '../../../redux/profile/profile-reducer';

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
            <SenderContent callback={props.addPost} placeholder={'Enter your post'}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
})
