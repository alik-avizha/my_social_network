import React, {ChangeEvent, useState} from 'react';
import classes from './profile-info.module.css';
import {ProfileType} from '../../model/profile-reducer';
import {Preloader} from 'common/components';
import {Description} from './profile-description/description';
import {ProfileStatusWithHooks} from './profile-status/profile-status-with-hooks';
import {ProfileDataFormPropsType, ProfileDataFormReduxForm} from './profile-data-form';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (value: File) => void
    saveProfile: (formData: ProfileDataFormPropsType) => Promise<void | string>
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const {profile, status, updateStatus, savePhoto} = props
    const [editMode, setEditMode] = useState(false)

    const mainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormPropsType) => {
        props.saveProfile(formData).then(()=>{
            setEditMode(false)
        })
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
                {editMode
                    ? <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile}/>
                    : <Description toEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={props.isOwner}/>}
            </div>
        </div>
    )
}

export default ProfileInfo
