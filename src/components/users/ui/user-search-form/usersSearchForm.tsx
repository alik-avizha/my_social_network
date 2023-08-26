import {Field, Formik} from "formik";
import React, {FC, memo} from "react";
import {SearchType} from "components/users/model/users-reducer";
import s from './usersSearchForm.module.css'
import {useSelector} from "react-redux";
import {getUsersFilter} from "components/users/model/users-selectors";

type FriendFormType = "true" | 'false' | 'null';
type FormType = {
    term: string,
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: SearchType) => void
}

export const UsersSearchForm: FC<PropsType> = memo(({onFilterChanged}) => {

    const filter = useSelector(getUsersFilter)
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: SearchType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <Formik enableReinitialize initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
                onSubmit={submit}>
            {({values, handleSubmit, isSubmitting, handleChange}) => (
                <form onSubmit={handleSubmit} className={s.formDataWrapper}>
                    <input type="text" name="term" onChange={handleChange} value={values.term} placeholder={'type to search...'}/>
                     <Field as="select" name="friend" className={s.select}>
                        <option value="null">all</option>
                        <option value="true">only followed</option>
                        <option value="false">only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting} className={s.sendData}>search</button>
                </form>
            )}
        </Formik>
    )
})