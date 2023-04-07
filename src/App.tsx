import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Store} from 'redux';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: Store //вопрос по типизации
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile
                        store={props.store}
                    />
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer
                        store={props.store}
                    />
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;
