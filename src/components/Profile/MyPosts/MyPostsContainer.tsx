import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {PostType} from './Post/Post';

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
