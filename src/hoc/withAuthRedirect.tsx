import React, {Component, ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';

type MapStateToProps = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent =  (props: MapStateToProps) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
