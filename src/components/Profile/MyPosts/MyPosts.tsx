import React from 'react';
import classes from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';


type MyPostsType = {
    posts: PostType[]
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            alert(text)
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
