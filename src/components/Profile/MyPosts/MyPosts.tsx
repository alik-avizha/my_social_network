import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {SenderContent} from '../../common/SenderContent/SenderContent';

type MyPostsType = {
    posts: PostType[]
    addPost: (value: string) => void
    deletePost: (postId: string) => void
    photo: string
    login: string | null
}

export const MyPosts = React.memo((props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message}
                                                     likesCount={p.likesCount}
                                                     date={p.date}
                                                     key={p.id}
                                                     deletePost={props.deletePost}
                                                     id={p.id}
                                                     photo={props.photo}
                                                     login={props.login}
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
