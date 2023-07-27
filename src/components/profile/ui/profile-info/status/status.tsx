import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string
}

export class Status extends React.Component<ProfileStatusType> {

    state: LocalStateType = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: ProfileStatusType, prevState: LocalStateType) {
        if (prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                    : <input
                        autoFocus
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                }
            </>
        )
    }
}