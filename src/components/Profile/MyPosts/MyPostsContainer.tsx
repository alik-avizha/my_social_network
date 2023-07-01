import React from 'react';
import {addPostActionCreator, removePostActionCreator} from '../../../redux/profile/profile-reducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {PostType} from './Post/Post';

type MapStateToPropsType = {
    posts: PostType[]
    photo: string
    login: string | null
}
type MapDispatchToPropsType = {
    addPost: (value: string) => void
    deletePost: (postId: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        photo: state.profilePage.profile.photos.large,
        login: state.auth.login
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (value) => {
            dispatch(addPostActionCreator(value))
        },
        deletePost: (postId) => {
            dispatch(removePostActionCreator(postId))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
