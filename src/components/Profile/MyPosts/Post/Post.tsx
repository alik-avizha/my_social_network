import React from 'react';
import classes from './Post.module.css';
import postImg from '../../../../assets/images/postImg.png'
import likeImg from '../../../../assets/images/like.jpg'

export type PostType = {
    id?: string
    message: string,
    likesCount: number
}

const Post= (props:PostType) => {

    return (
        <div className={classes.item}>
            <div className={classes.postMessage}>
                <img src={postImg} alt="avatar"/>
                <span className={classes.message}>{props.message}</span>
            </div>
            <div className={classes.likes}>
                <img src={likeImg} alt={'like'} className={classes.likeImg}/>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post
