import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchTopPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchTopPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainerSecond extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            if (this.props.authorizedUserId !== null) {
                userId = String(this.props.authorizedUserId)
            } else {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getStatus: getStatusThunkCreator, updateStatus:updateStatusThunkCreator}),
    withRouter
)(ProfileContainerSecond)

export default ProfileContainer