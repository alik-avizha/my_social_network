import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/PreLoader/Preloader';
import {Description} from './ProfileDescription/Description';
import {ProfileAvatar} from './ProfileAvatar/ProfileAvatar';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (value: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const {profile, status, updateStatus, savePhoto} = props

    const mainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatarAndStatusBlock}>
                    <ProfileAvatar avatar={profile.photos.large}/>
                    {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <Description profile={profile}/>
            </div>
        </div>
    )
}
export default ProfileInfo
