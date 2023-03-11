import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {DialogItemType} from '../components/Dialogs/DialogItem/DialogItem';
import {MessageItemType} from '../components/Dialogs/MessageItem/MessageItem';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 13},
            {id: 2, message: 'I am beginner programmer', likesCount: 5},
            {id: 3, message: 'Here I are making my social network', likesCount: 25}
        ]
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
        ]
    }
}

export type ProfilePage = {
    posts: PostType[]
}

export type DialogsPage = {
    dialogs: DialogItemType[],
    messages: MessageItemType[]
}

export type StateType = {
    profilePage: ProfilePage,
    dialogsPage: DialogsPage
}

export default state