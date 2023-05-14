import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/PreLoader/Preloader';

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfoWrapper}>
            <div className={classes.descriptionBlock}>
                {props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt={'avatar'} className={classes.imgAvatar}/>
                    : <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0tWNyZDN7-7a-G9uggn83aL_U-kbfne1sA&usqp=CAU'}
                        alt={'avatar'} className={classes.imgAvatar}/>
                }
                <div className={classes.descriptionWrapper}>
                    <div className={classes.description}>
                        <span><strong>Name: </strong>{props.profile.fullName}</span>
                        <span><strong>About me: </strong>{props.profile.aboutMe ? props.profile.aboutMe : 'нету информации'}</span>
                        <span><strong>Job: </strong>{props.profile.lookingForAJob ? props.profile.lookingForAJob : 'без работы'}</span>
                        <span><strong>VK: </strong>{props.profile.contacts.vk ? props.profile.contacts.vk : 'vk.com'}</span>
                        <span><strong>Github: </strong>{props.profile.contacts.github ? props.profile.contacts.github : 'github.com'}</span>
                        <span><strong>Instagram: </strong>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'instagram.com'}</span>
                        <span><strong>Twitter: </strong>{props.profile.contacts.twitter ? props.profile.contacts.twitter : 'twitter.com'}</span>
                        <span><strong>Facebook: </strong>{props.profile.contacts.facebook ? props.profile.contacts.facebook : 'facebook.com'}</span>
                        <span><strong>Youtube: </strong>{props.profile.contacts.youtube ? props.profile.contacts.youtube : 'youtube.com'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo
