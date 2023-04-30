import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId:string
}
type MapStateToProps = {
    profile: ProfileType
}
type MapDispatchTopProps = {
    setUserProfile: (profile: ProfileType) => void
}
type ProfileContainerPropsType = MapStateToProps & MapDispatchTopProps
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(28769)
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }
    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)
