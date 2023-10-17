import React from 'react';
import './app.css';
import Navbar from '../../components/navbar/ui/navbar';
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom';
import {HeaderContainer} from 'components/header/ui/header-container';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeAppThunkCreator} from '../model/app-reducer';
import {AppStateType, store} from '../model/redux-store';
import {Preloader} from 'common/components';
import {withSuspense} from 'common/hoc';
import {ContentRouting} from "components/routing/routing";
import Sidebar from "components/sidebar/ui/sidebar";


const LoginPage = React.lazy(() => import('components/login/ui/login-page'))

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
                    {this.props.isAuth ? <div className="app-wrapper-content">
                        <ContentRouting/>
                    </div> :  <Redirect to="/login"/>}
                    {this.props.isAuth && <Sidebar/>}
                </div>
                <Route path="/login" render={withSuspense(LoginPage)}/>
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