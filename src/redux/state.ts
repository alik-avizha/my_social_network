import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from '../components/Dialogs/MessageItem/MessageItem';

export type ProfilePage = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPage = {
    dialogs: DialogItemType[],
    messages: MessageItemType[],
    newMessage: string
}
export type StateType = {
    profilePage: ProfilePage,
    dialogsPage: DialogsPage
}

let state : StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 13},
            {id: 2, message: 'I am beginner programmer', likesCount: 5},
            {id: 3, message: 'Here I are making my social network', likesCount: 25}
        ],
        newPostText: 'You are welcome!'
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
        newMessage: 'Hello my friend'
    }
}


let rerenderEntireTree = () => {
    console.log('Первоначальный вызов функции')
}

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount : 0
    }
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree();
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessage
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = ''
    rerenderEntireTree();
}
export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessage = newText
    rerenderEntireTree();
}


export const subscribe = (observer: ()=>void) => {
    rerenderEntireTree = observer; //наблюдатель(observer) - патерн(publisher-subscriber)
}


export default state