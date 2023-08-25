import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {AppStateType} from 'app/model/redux-store';
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    savePhotoThunkCreator,
    saveProfileThunkCreator,
    updateStatusThunkCreator
} from '../model/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from 'common/hoc';
import {ProfileDataFormPropsType} from 'components/profile/ui/profile-info/profile-data-form/profile-data-form';

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
    savePhoto: (value: File) => void
    saveProfile: (data: ProfileDataFormPropsType) => Promise<void | string>
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchTopPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainerSecond extends React.Component<PropsType> {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
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
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator,
        savePhoto: savePhotoThunkCreator,
        saveProfile: saveProfileThunkCreator,
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainerSecond)

export default ProfileContainer