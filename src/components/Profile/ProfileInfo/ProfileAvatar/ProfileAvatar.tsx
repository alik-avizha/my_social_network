import React from 'react';
import classes from './ProfileAvatar.module.css';

type ProfileAvatarPropsType = {
    avatar: string
}

export const ProfileAvatar = (props: ProfileAvatarPropsType) => {
    return (
        <div>
            <img
                src={props.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0tWNyZDN7-7a-G9uggn83aL_U-kbfne1sA&usqp=CAU'}
                alt={'avatar'} className={classes.mainPhoto}/>
        </div>
    );
};
