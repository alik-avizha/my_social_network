import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);