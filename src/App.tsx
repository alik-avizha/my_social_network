import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeAppThunkCreator} from './redux/app/app-reducer';
import {AppStateType, store} from './redux/redux-store';
import {Preloader} from './components/common/PreLoader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import {Sidebar} from './components/SideBar/Sidebar';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/login/Login'))

type MapDispatchTopProps = {
    initializeApp: () => void
}
type MapStateTopProps = {
    initialised: boolean
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
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/login" render={withSuspense(Login)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    {/*<Route path="/settings" render={() => <Settings/>}/>*/}
                    <Route exact path="/" render={() => <Redirect to="/profile" />} />
                </div>
                <Sidebar/>
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateTopProps => ({
    initialised: state.app.initialised
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