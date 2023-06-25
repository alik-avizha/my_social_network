import React from 'react';
import classes from './Post.module.css';
import postImg from '../../../../assets/images/postImg.png'
import likeImg from '../../../../assets/images/like.jpg'
import basket from '../../../../assets/images/basket.svg'

export type PostType = {
    id: string
    message: string,
    likesCount: number
}
type PropsType = PostType & {deletePost: (postId: string) => void, photo: string}

const Post = (props: PropsType) => {

    const deletePost = () => {
        props.deletePost(props.id)
    }

    return (
        <div className={classes.item}>
            <div className={classes.postMessage}>
                {props.photo ? <img src={props.photo} alt="avatar"/> : <img src={postImg} alt="avatar"/>}
                <span className={classes.message}>{props.message}</span>
            </div>
            <div className={classes.likes}>
                <img src={basket} alt={'basket'} className={classes.likeImg} onClick={deletePost}/>
                <img src={likeImg} alt={'like'} className={classes.likeImg}/>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post
