import React from 'react'
import {create, ReactTestInstance} from 'react-test-renderer';
import {ProfileStatus} from './profile-status';

describe('profile-status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'New Status'} updateStatus={() => {
        }}/>);
        const instance = component.getInstance()
        if (instance) {
            expect(instance.props.status).toBe('New Status')
        }
    })
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus status={'New Status'} updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBe(null)
    })
    test('after creation <input> shouldn\'t be displayed', () => {
        const component = create(<ProfileStatus status={'New Status'} updateStatus={() => {
        }}/>);
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('after creation <span>should contains correct status', () => {
        const component = create(<ProfileStatus status={'New Status'} updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('New Status')
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'New Status'} updateStatus={() => {
        }}/>);
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('New Status')
    })
    test('callback should be called', () => {
        const fakeCallback = jest.fn()
        const component = create(<ProfileStatus status={'New Status'} updateStatus={fakeCallback}/>);
        const instance  = component.getInstance() as ProfileStatusInstance
        if (instance) {
            instance.deactivateEditMode()
        }
        expect(fakeCallback.mock.calls.length).toBe(1)
    })
})
interface ProfileStatusInstance extends ReactTestInstance {
    deactivateEditMode: () => void;
}