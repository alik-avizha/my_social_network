import React from 'react';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {PostType} from './Post/Post';

type MapStateToPropsType = {
    posts: PostType[]
    //newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (value: string) => void
    //updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (value: string) => {
            dispatch(addPostActionCreator(value))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
