import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type Post = {
    id: number,
    message: string,
    likesCount: number
}

export  type MyPostsPropsType = {
    posts: Post[]
}

let posts = [
    {id: 1, message: 'Hi', likesCount: 13},
    {id: 2, message: 'I am beginner programmer', likesCount: 5},
    {id: 3, message: 'Here I are making my social network', likesCount: 25}
]

type Dialog = {
    id: number,
    name: string
}

export type DialogsPropsType = {
    dialogs: Dialog[]
}

let dialogs = [
    {id: 1, name: 'Aleksandr'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Nikita'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Stepan'},
    {id: 6, name: 'Viktor'}
]

type message = {
    id: number,
    message: string
}

export type MessagePropsType = {
    message: message[]
}

let messages = [
    {id: 1, message: 'Hello friend'},
    {id: 2, message: 'How are you do?'},
    {id: 3, message: 'Byi'},
    {id: 4, message: 'How do you feel?'},
    {id: 5, message: 'Hey'},
    {id: 6, message: 'Yes.I do'}
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);