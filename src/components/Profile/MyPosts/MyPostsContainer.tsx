import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {Store} from 'redux';

type MyPostsContainerType = {
    store: Store
}

const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    let addPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChangeHandler = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} addPost={addPostHandler}
                 updateNewPostText={onPostChangeHandler}/>
    )
}

export default MyPostsContainer
