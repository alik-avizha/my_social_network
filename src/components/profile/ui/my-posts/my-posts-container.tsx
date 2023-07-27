import React from 'react';
import {
    addPostActionCreator,
    clickLikeAC,
    PostType,
    removePostActionCreator
} from '../../model/profile-reducer';
import {MyPosts} from './my-posts';
import {AppStateType} from 'app/model/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    posts: PostType[]
    photo: string
    userName: string
}
type MapDispatchToPropsType = {
    addPost: (value: string) => void
    deletePost: (postId: string) => void
    changeLikesAndDislikes: (postId:string, name: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        photo: state.profilePage.profile.photos.large,
        userName: state.profilePage.profile.fullName,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (value) => {
            dispatch(addPostActionCreator(value))
        },
        deletePost: (postId) => {
            dispatch(removePostActionCreator(postId))
        },
        changeLikesAndDislikes: (postId:string, name:string) => {
            dispatch(clickLikeAC(postId, name))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
