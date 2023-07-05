import React from 'react';
import classes from './Description.module.css'
import {ProfileType} from '../../../../redux/profile/profile-reducer';
import {Contact} from './ContactsDesc/ContactsDesc';
import {MainData} from './MainDesc/MainData';

type DescriptionPropsType = {
    profile: ProfileType
    isOwner: boolean
    toEditMode: () => void
}

export const Description = (props: DescriptionPropsType) => {
    return (
        <div className={classes.descriptionWrapper}>
            {props.isOwner && <div>
                <button onClick={props.toEditMode}>edit</button>
            </div>}
            <div className={classes.description}>
                <MainData profile={props.profile}/>
                <div>
                    <span><b>Contacts :</b></span>
                    {Object.entries(props.profile.contacts).map((el, index) => {
                        return <Contact key={index} title={el[0]} value={el[1]}/>
                    })}
                </div>
            </div>
        </div>
    );
};

