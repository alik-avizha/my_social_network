import React, {useEffect} from 'react';
import {AppStateType} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeTC, getThemeTC} from '../../redux/settings/settings-reducer';
import classes from './Settings.module.css'
import SuperSelect from '../common/SuperSelect/SuperSelect';

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const Theme = () => {

    const themeId =  useSelector<AppStateType, number>(state => state.theme.themeId)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getThemeTC())
    }, [])

    const change = (id: number) => {
        dispatch(changeThemeTC(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div>
            <SuperSelect
                id={'hw12-select-theme'}
                className={classes.select}
                onChangeOption={change}
                options={themes}
                value={themeId}
            />
        </div>
    );
};

export default Theme;