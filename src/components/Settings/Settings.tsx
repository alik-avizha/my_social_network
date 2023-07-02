import React, {useEffect} from 'react';
import {AppStateType} from '../../redux/redux-store';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeIdAC} from '../../redux/settings/themeReducer';
import classes from './Settings.module.css'
import SuperSelect from '../common/SuperSelect/SuperSelect';

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const Settings = () => {

    const themeId = useSelector<AppStateType, number>(state => state.theme.themeId)

    const dispatch = useDispatch()

    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeIdAC(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])


    return (
        <div>
            <p className={classes.pStyle}>Выберите тему</p>
            <SuperSelect
                id={'hw12-select-theme'}
                className={classes.select}
                onChangeOption={change}
                options={themes}
            />
        </div>
    );
};

export default Settings;