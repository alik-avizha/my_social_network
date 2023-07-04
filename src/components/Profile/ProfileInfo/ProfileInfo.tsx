import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile/profile-reducer';
import {Preloader} from '../../common/PreLoader/Preloader';
import {Description} from './ProfileDescription/Description';
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
                    <label htmlFor="mainPhotoInput">
                        <img
                            src={props.profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0tWNyZDN7-7a-G9uggn83aL_U-kbfne1sA&usqp=CAU'}
                            alt={'avatar'}
                            className={classes.mainPhoto}
                        />
                    </label>
                    {props.isOwner && (
                        <div className={classes.inputContainer}>
                            <input
                                type={'file'}
                                id="mainPhotoInput"
                                onChange={mainPhotoSelected}
                                className={classes.mainPhotoInput}
                            />
                        </div>
                    )}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <Description profile={profile}/>
            </div>
        </div>
    )
}
export default ProfileInfo
