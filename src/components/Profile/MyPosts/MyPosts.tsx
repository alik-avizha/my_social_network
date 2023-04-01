import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {ActionsType, addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts
