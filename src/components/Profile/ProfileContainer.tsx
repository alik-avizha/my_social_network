import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfileThunkCreator, ProfileType} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}
type MapStateToProps = {
    profile: ProfileType
    isAuth: boolean
}
type MapDispatchTopProps = {
    getUserProfile: (userId: string) => void
}
type ProfileContainerPropsType = MapStateToProps & MapDispatchTopProps
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(28769)
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (

            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(withUrlDataContainerComponent)
