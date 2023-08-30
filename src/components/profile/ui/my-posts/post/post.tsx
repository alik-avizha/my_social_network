import React from 'react';
import classes from './post.module.css';
import postImg from '../../../../../assets/images/user.jpg'
import {PostType} from '../../../model/profile-reducer';
import {SvgSelectorContacts} from "common/components/svg-selectors/profile/svgSelectorProfile";
import {Typography} from "@mui/material";

type PropsType = {
    post: PostType
    userName: string
    photo: string
    deletePost: (postId: string) => void
    changeLikesAndDislikes: (postId: string, name: string) => void
}
const Post = (props: PropsType) => {

    const deletePost = () => {
        props.deletePost(props.post.id)
    }
    const likePost = () => {
        if (!props.post.isLike) {
            props.changeLikesAndDislikes(props.post.id, 'like')
        }
    }
    const dislikePost = () => {
        if (!props.post.isDislike) {
            props.changeLikesAndDislikes(props.post.id, 'dislike')
        }
    }

    return (
        <div className={classes.item}>
            {props.photo ? <img className={classes.userPhoto} src={props.photo} alt="avatar"/> :
                <img className={classes.userPhoto} src={postImg} alt="avatar"/>}
            <div className={classes.postMessage}>
                <Typography variant={'body2'} className={classes.message}>{props.post.message}</Typography>
            </div>
            <div className={classes.activities}>
                <button onClick={deletePost} aria-label="delete post">
                    <SvgSelectorContacts svgName={'deletePost'}/>
                </button>
                <button onClick={dislikePost} aria-label="dislike post">
                    <SvgSelectorContacts svgName={'dislikePost'}/>
                </button>
                <Typography className={classes.activity}>{props.post.dislikesCount}</Typography>
                <button onClick={likePost} aria-label="like post">
                    <SvgSelectorContacts svgName={'likePost'}/>
                </button>
                <Typography className={classes.activity}>{props.post.likesCount}</Typography>
            </div>
            <div className={classes.loginAndDate}>
                <Typography variant={'body2'} className={classes.userName}>{props.userName}</Typography>
                <Typography variant={'body2'} className={classes.date}>{props.post.date}</Typography>
            </div>
        </div>
    )
}
export default Post
