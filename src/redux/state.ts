import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from '../components/Dialogs/MessageItem/MessageItem';

export type ProfilePage = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPage = {
    dialogs: DialogItemType[]
    messages: MessageItemType[]
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
}
export type Store = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

export let store: Store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 13},
                {id: 2, message: 'I am beginner programmer', likesCount: 5},
                {id: 3, message: 'Here I are making my social network', likesCount: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Aleksandr'},
                {id: 2, name: 'Denis'},
                {id: 3, name: 'Nikita'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Stepan'},
                {id: 6, name: 'Viktor'}
            ],
            messages: [
                {id: 1, message: 'Hello friend'},
                {id: 2, message: 'How are you do?'},
                {id: 3, message: 'Byi'},
                {id: 4, message: 'How do you feel?'},
                {id: 5, message: 'Hey'},
                {id: 6, message: 'Yes.I do'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('Hello my friend!!')
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель(observer) - патерн(publisher-subscriber)
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber();
        }
    }
}

//Выражение as const используется в TypeScript для явного указания, что выражение должно быть рассмотрено как константа, а не как переменная.
//Action creator берет данные из приложения и формирует объект действия, который передается в хранилище Redux через функцию dispatch().

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const
export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}) as const
