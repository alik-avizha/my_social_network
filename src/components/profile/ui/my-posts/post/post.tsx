import React from 'react';
import classes from './post.module.css';
import postImg from '../../../../../assets/images/user.jpg'
import {PostType} from '../../../model/profile-reducer';
import {SvgSelectorContacts} from "common/components/svg-selectors/profile/svgSelectorProfile";

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
                <span className={classes.message}>{props.post.message}</span>
            </div>
            <div className={classes.activities}>
                <button onClick={deletePost}>
                    <SvgSelectorContacts svgName={'deletePost'}/>
                </button>
                <button onClick={dislikePost}>
                    <SvgSelectorContacts svgName={'dislikePost'}/>
                </button>
                <span>{props.post.dislikesCount}</span>
                <button onClick={likePost}>
                    <SvgSelectorContacts svgName={'likePost'}/>
                </button>
                <span>{props.post.likesCount}</span>
            </div>
            <div className={classes.loginAndDate}>
                <span className={classes.userName}>{props.userName}</span>
                <span className={classes.date}>{props.post.date}</span>
            </div>
        </div>
    )
}
export default Post
