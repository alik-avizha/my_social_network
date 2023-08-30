import React from 'react';
import './app.css';
import Navbar from '../../components/navbar/ui/navbar';
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import News from '../../components/news/ui/news';
import Music from '../../components/music/ui/music';
import {HeaderContainer} from 'components/header/ui/header-container';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeAppThunkCreator} from '../model/app-reducer';
import {AppStateType, store} from '../model/redux-store';
import {Preloader} from 'common/components';
import {withSuspense} from 'common/hoc';
import {Sidebar} from 'components/sidebar/ui/sidebar';
import Footer from "components/footer/footer";

const DialogsContainer = React.lazy(() => import('../../components/dialogs/ui/dialogs-container'))
const ProfileContainer = React.lazy(() => import('../../components/profile/ui/profile-container'))
const UsersPage = React.lazy(() => import('components/users/ui/users-page'))
const LoginPage = React.lazy(() => import('components/login/ui/login-page'))
const ChatPage = React.lazy(() => import('components/chat/ui/chat-page'))

type MapDispatchTopProps = {
    initializeApp: () => void
}
type MapStateTopProps = {
    initialised: boolean
    isAuth: boolean
}
type AppContainerPropsType = MapDispatchTopProps & MapStateTopProps

class App extends React.Component<AppContainerPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialised) {
            return <Preloader/>
        }

        return (
            <>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    {this.props.isAuth && <Navbar/>}
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/users" render={withSuspense(UsersPage)}/>
                        <Route path="/login" render={withSuspense(LoginPage)}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/chat" render={withSuspense(ChatPage)}/>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                    </div>
                    {this.props.isAuth && <Sidebar/>}
                </div>
                <Footer/>
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateTopProps => ({
    initialised: state.app.initialised,
    isAuth: state.auth.isAuth
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp: initializeAppThunkCreator}))(App)

export const SamuraiApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}