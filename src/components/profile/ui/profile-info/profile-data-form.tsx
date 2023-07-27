import React from 'react';
import {createField, Input, Textarea} from 'common/components';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ContactsType} from '../../model/profile-reducer';
import classes from '../../../login/ui/login-form/login-form.module.css';
import {Button} from 'common/components';

export type ProfileDataFormPropsType = {
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: ContactsType;
}
type ProfileDataKeyValuesType = keyof ProfileDataFormPropsType
const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> = ({handleSubmit, initialValues,  error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Button name={'Save'}/>
            </div>
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <div>
                <span><b>Full Name: </b>{createField<ProfileDataKeyValuesType>('Full Name', 'fullName', [], Input)}</span>
            </div>
            <div>
                <span><b>About me: </b>{createField<ProfileDataKeyValuesType>('About me', 'aboutMe', [], Input)}</span>
            </div>
            <div>
                <span style={{display: 'flex'}}><b>Looking for a job: </b>{createField<ProfileDataKeyValuesType>('Looking for a job', 'lookingForAJob', [], Input, {type: 'checkbox'})}</span>
            </div>
            <div>
                <span><b>My professional skills: </b>{createField<ProfileDataKeyValuesType>('My professional skills', 'lookingForAJobDescription', [], Textarea)}</span>
            </div>
            <div>
                <span><b>Contacts :</b></span>
                {initialValues.contacts && Object.keys(initialValues.contacts).map((el, index) => {
                    return (
                        <div key={index}>
                            <span><b>{el}: </b>{createField(el, 'contacts.' + el, [], Input)}</span>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

