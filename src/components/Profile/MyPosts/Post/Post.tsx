import React from 'react';
import classes from './Post.module.css';
import postImg from '../../../../assets/images/postImg.png'
import likeImg from '../../../../assets/images/like.jpg'
import basket from '../../../../assets/images/basket.svg'

export type PostType = {
    id: string
    message: string,
    likesCount: number
    date: string
}
type PropsType = PostType & { deletePost: (postId: string) => void, photo: string,
    userName: string }

const Post = (props: PropsType) => {

    const deletePost = () => {
        props.deletePost(props.id)
    }

    return (
        <div className={classes.item}>
            {props.photo ? <img className={classes.userPhoto} src={props.photo} alt="avatar"/> : <img className={classes.userPhoto} src={postImg} alt="avatar"/>}
            <div className={classes.postMessage}>
                <span className={classes.message}>{props.message}</span>
            </div>
            <div className={classes.activities}>
                <img src={basket} alt={'basket'} className={classes.likeImg} onClick={deletePost}/>
                <img src={likeImg} alt={'like'} className={classes.likeImg}/>
                <span>{props.likesCount}</span>
            </div>
            <div className={classes.loginAndDate}>
                <span>{props.userName}</span>
                <span>{props.date}</span>
            </div>
        </div>
    )
}
export default Post
