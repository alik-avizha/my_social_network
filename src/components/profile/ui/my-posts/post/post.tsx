import React from 'react';
import classes from './post.module.css';
import postImg from '../../../../../assets/images/user.jpg'
import likeIcon from '../../../../../assets/images/like.svg'
import dislikeIcon from '../../../../../assets/images/dislike-svgrepo-com.svg'
import deleteIcon from '../../../../../assets/images/delete-svgrepo-com.svg'
import {PostType} from '../../../model/profile-reducer';

type PropsType = {
    post: PostType
    userName: string
    photo: string
    deletePost: (postId: string) => void
    changeLikesAndDislikes: (postId:string, name: string) => void
}

const Post = (props: PropsType) => {

    const deletePost = () => {
        props.deletePost(props.post.id)
    }
    const likePost = () => {
        if (!props.post.isLike){
            props.changeLikesAndDislikes(props.post.id, 'like')
        }
    }
    const dislikePost = () => {
        if (!props.post.isDislike)  {
            props.changeLikesAndDislikes(props.post.id, 'dislike')
        }
    }

    return (
        <div className={classes.item}>
            {props.photo ? <img className={classes.userPhoto} src={props.photo} alt="avatar"/> : <img className={classes.userPhoto} src={postImg} alt="avatar"/>}
            <div className={classes.postMessage}>
                <span className={classes.message}>{props.post.message}</span>
            </div>
            <div className={classes.activities}>
                <img src={deleteIcon} alt={'deletePost'} onClick={deletePost}/>
                <img onClick={dislikePost} src={dislikeIcon} alt="dislikePost"/>
                <span>{props.post.dislikesCount}</span>
                <img onClick={likePost} src={likeIcon} alt={'likePost'} />
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
