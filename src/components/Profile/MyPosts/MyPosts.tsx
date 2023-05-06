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



    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

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
            <div className={classes.addPostWrapper}>
                <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}
                              placeholder={'send your Post'} className={classes.writePost}/>
                <button onClick={addPostHandler} className={classes.addPost}>Add Post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts
