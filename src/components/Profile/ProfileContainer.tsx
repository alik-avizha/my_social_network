import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getUserProfileThunkCreator, ProfileType} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchTopPropsType = {
    getUserProfile: (userId: string) => void
}
type ProfileContainerPropsType = MapStateToPropsType & MapDispatchTopPropsType
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
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(withUrlDataContainerComponent)
