import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setNewTitle] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        props.updateStatus(title)
        setEditMode(false)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        !editMode
            ? <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>

            : <input autoFocus onBlur={deactivateEditMode} value={title} onChange={onStatusChange}/>

    )
}
