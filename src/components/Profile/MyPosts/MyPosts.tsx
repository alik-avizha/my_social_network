import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';

type MyPostsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p,index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPostHandler = () => {
        props.addPost()
    }

    let onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
