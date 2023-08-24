import React, {ChangeEvent, useState} from 'react';
import classes from './profile-info.module.css';
import {ProfileType} from '../../model/profile-reducer';
import {Button, Preloader} from 'common/components';
import {Description} from './description/description';
import {StatusWithHooks} from 'components/profile/ui/profile-info/status/status-with-hooks';
import {ProfileDataFormPropsType, ProfileDataFormReduxForm} from './profile-data-form';
import {ContactInfo} from "components/profile/ui/profile-info/description/contacts-info/contacts-info";
import {ContactsType} from "assets/images/contacts/svgSelector";
import edit from '../../../../assets/images/edit-svgrepo-com.svg'

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
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfoWrapper}>
            {props.isOwner && !editMode && <div className={classes.editProfileInfo}>
                <Button style={{borderTopLeftRadius: '20px', padding: '8px'}} callback={() => {
                    setEditMode(true)
                }}>
                    <img className={classes.edit} src={edit} alt={'edit'}/>
                </Button>
            </div>}
            <div className={classes.descriptionBlock}>
                <div className={classes.avatarBlock}>
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
                    <StatusWithHooks className={classes.status} status={status} updateStatus={updateStatus} isOwner={props.isOwner}/>
                </div>
                {!editMode && <Description profile={profile}/>}
            </div>
            {!editMode && <div className={classes.contacts}>
                {Object.entries(props.profile.contacts).map((el, index) => {
                    return <ContactInfo key={index} title={el[0] as ContactsType} value={el[1]}/>
                })}
            </div>}
            {editMode && <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile}/>}
        </div>
    )
}

export default ProfileInfo
