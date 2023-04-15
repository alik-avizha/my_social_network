import {ActionsType, ProfilePage} from './store';


export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const


let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 13},
        {id: 2, message: 'I am beginner programmer', likesCount: 5},
        {id: 3, message: 'Here I are making my social network', likesCount: 25}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePage = initialState, action: ActionsType): ProfilePage => {
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