import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';
import {ActionsType} from '../../../redux/state';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

type MyPostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChangeHandler = () => {
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
                    <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}
                              placeholder={'send your Post'}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts
