import React, {useState} from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';

type MyPostsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let [myPosts, setMyPosts] = useState(true)

    let postsElements = props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount} key={index}/>)

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
            <h3 className={classes.h3} onClick={()=>setMyPosts(!myPosts)}>My posts</h3>
            <div className={classes.addPostWrapper}>
                <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}
                              placeholder={'send your Post'} className={classes.writePost}/>
                <button onClick={addPostHandler} className={classes.addPost}>Add Post</button>
            </div>
            <div className={classes.posts}>
                {myPosts && postsElements}
            </div>
        </div>
    )
}
export default MyPosts
