import React from 'react';
import classes from './description.module.css'
import {ProfileType} from '../../../model/profile-reducer';
import {Contact} from './contacts-data/contacts-data';
import {MainData} from './main-data/main-data';
import {Button} from 'common/components';

type DescriptionPropsType = {
    profile: ProfileType
    isOwner: boolean
    toEditMode: () => void
}

export const Description = (props: DescriptionPropsType) => {
    return (
        <div className={classes.descriptionWrapper}>
            {props.isOwner && <div>
                <Button name={'Settings'} callback={props.toEditMode}/>
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

