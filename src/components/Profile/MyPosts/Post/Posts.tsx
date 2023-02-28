import React from "react";
import classes from './Post.module.css';

type PostPropsType = {
    message: string,
    likeCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294767_960_720.png'/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}
export default Post
