import {ActionsType, ProfilePage} from './state';

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const


export const profileReducer = (state: ProfilePage, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost);
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}