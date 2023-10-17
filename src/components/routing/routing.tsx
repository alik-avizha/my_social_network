import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {withSuspense} from "common/hoc";
import {useWindowSize} from "common/hooks/useWindowSize";
const DialogsContainer = React.lazy(() => import('../../components/dialogs/ui/dialogs-container'))
const ProfileContainer = React.lazy(() => import('../../components/profile/ui/profile-container'))
const UsersPage = React.lazy(() => import('components/users/ui/users-page'))
const ChatPage = React.lazy(() => import('components/chat/ui/chat-page'))
const News = React.lazy(() => import('../../components/news/ui/news'))
const Music = React.lazy(() => import('../../components/music/ui/music'))
const FriendsPage = React.lazy(() => import('../../components/friends/ui/friends-page'))

export const ContentRouting = () => {
    const { windowSize} = useWindowSize()

    return (
        <>
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
            <Route path="/users" render={withSuspense(UsersPage)}/>
            <Route path="/news" render={withSuspense(News)}/>
            <Route path="/music" render={withSuspense(Music)}/>
            <Route path="/chat" render={withSuspense(ChatPage)}/>
            {windowSize <= 1268  && <Route path="/friends" render={withSuspense(FriendsPage)}/>}
            <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
        </>
    );
};
