import React from 'react';
import classes from 'components/profile/ui/profile-info/avatar/avatar.module.css';

type PropsType = {
    avatar: string
}
export const Avatar = (props: PropsType) => {
    return (
        <div>
            <img
                src={props.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0tWNyZDN7-7a-G9uggn83aL_U-kbfne1sA&usqp=CAU'}
                alt={'avatar'} className={classes.mainPhoto}/>
        </div>
    );
};
