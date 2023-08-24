import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from './status.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    className?: string
}

export const StatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setNewTitle] = useState<string>(props.status)

    useEffect(() => {
        setNewTitle(props.status)
    }, [props.status])


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
        !(props.isOwner && editMode)
            ? <span className={`${classes.status} ${props.className}`} onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>

            : <input className={`${classes.editModeStatus} ${props.className}`} autoFocus onBlur={deactivateEditMode} value={title}
                     onChange={onStatusChange}/>

    )
}
