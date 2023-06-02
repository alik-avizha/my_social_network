import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type MyPostsType = {
    posts: PostType[]
    addPost: (value: string) => void
}
type AddPostFormType = {
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let addPostHandler = (value: AddPostFormType) => {
        props.addPost(value.newPostText)
    }
    
    return (
        <div className={classes.postsBlock}>
            <AddMessageFormRedux onSubmit={addPostHandler}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.addPostWrapper}>
            <Field className={classes.textarea} component="textarea" name="newPostText" placeholder="Enter your post"/>
            <button className={classes.addPost}>Add</button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<AddPostFormType>({form: 'AddPostForm'})(AddPostForm)
