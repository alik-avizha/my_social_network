import React from 'react';
import classes from './description.module.css'
import {ProfileType} from '../../../model/profile-reducer';
import {ContactInfo} from 'components/profile/ui/profile-info/description/contacts-info/contacts-info';
import {MainInfo} from 'components/profile/ui/profile-info/description/main-info/main-info';
import {Button} from 'common/components';

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    toEditMode: () => void
}
export const Description = (props: PropsType) => {
    return (
        <div className={classes.descriptionWrapper}>
            {props.isOwner && <div>
                <Button name={'Settings'} callback={props.toEditMode}/>
            </div>}
            <div className={classes.description}>
                <MainInfo profile={props.profile}/>
                <div>
                    <span><b>Contacts :</b></span>
                    {Object.entries(props.profile.contacts).map((el, index) => {
                        return <ContactInfo key={index} title={el[0]} value={el[1]}/>
                    })}
                </div>
            </div>
        </div>
    );
};

