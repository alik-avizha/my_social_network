import React from "react";
import classes from './Post.module.css';

export type PostType = {
    id?: number
    message: string,
    likesCount: number
}

const Post= (props:PostType) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294767_960_720.png' alt="avatar"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post
