import {Field, Formik} from "formik";
import React, {FC, memo} from "react";
import {SearchType} from "components/users/model/users-reducer";
import s from './usersSearchForm.module.css'

type FormType = {
    term: string,
    friend: "true" | 'false' | 'null'
}

type PropsType = {
    onFilterChanged: (filter: SearchType) => void
}

const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors
}
export const UsersSearchForm: FC<PropsType> = memo(({onFilterChanged}) => {
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: SearchType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <Formik initialValues={{term: '', friend: 'null'}} validate={userSearchFormValidate} onSubmit={submit}>
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