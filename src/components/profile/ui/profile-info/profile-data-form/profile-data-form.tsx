import React from 'react';
import {Button, createField, Input} from 'common/components';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ContactsType} from 'components/profile/model/profile-reducer';
import classes from 'components/login/ui/login-form/login-form.module.css';
import s from 'components/profile/ui/profile-info/profile-data-form/profile-data-form.module.css'

export type ProfileDataFormPropsType = {
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    aboutMe: string;
    contacts: ContactsType;
}
type ProfileDataKeyValuesType = keyof ProfileDataFormPropsType
const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormPropsType>> = ({
                                                                                    handleSubmit,
                                                                                    initialValues,
                                                                                    error
                                                                                }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.profileDataWrapper}>
                <div className={s.saveProfile}>
                    <Button style={{width: '70%'}} name={'Save'}/>
                </div>
                {error && <div className={classes.formSummaryError}>{error}</div>}
                <div className={s.item}>
                    <span><b>Full Name: </b></span>
                    {createField<ProfileDataKeyValuesType>('Full Name', 'fullName', [], Input)}
                </div>
                <div className={s.item}>
                    <span><b>About me: </b></span>
                    {createField<ProfileDataKeyValuesType>('About me', 'aboutMe', [], Input)}
                </div>
                <div className={s.lookForAJob}>
                    <span><b>Looking for a job: </b></span>
                    {createField<ProfileDataKeyValuesType>('Looking for a job', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                <div className={s.item}>
                    <span><b>My professional skills: </b></span>
                    {createField<ProfileDataKeyValuesType>('My professional skills', 'lookingForAJobDescription', [], Input)}
                </div>
                {initialValues.contacts && Object.keys(initialValues.contacts).map((el, index) => {
                    return (
                        <div key={index} className={s.item}>
                            <span><b>{el}: </b></span>
                            {createField(el, 'contacts.' + el, [], Input)}
                        </div>
                    )
                })}
            </div>
        </form>
    )
}
export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

