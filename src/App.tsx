import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/login/Login';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeAppThunkCreator} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './components/common/PreLoader/Preloader';

type MapDispatchTopProps = {
    initializeApp: () => void
}
type MapStateTopProps = {
    initialised: boolean
}
type AppContainerPropsType = MapDispatchTopProps & MapStateTopProps

class AppContainer extends React.Component<AppContainerPropsType> {

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
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state: AppStateType): MapStateTopProps => ({
   initialised: state.app.initialised
})

export const App = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,{initializeApp: initializeAppThunkCreator}))(AppContainer)
