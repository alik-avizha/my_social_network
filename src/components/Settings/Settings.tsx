import React from 'react';
import classes from './Settings.module.css';

const Settings = () => {
    return (
        <div className={classes.settings}>
            <h2 className={classes.title}>Настройки</h2>
            <form className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="email">Электронная почта</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="language">Язык</label>
                    <select id="language" name="language">
                        <option value="en">Английский</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>
                <button className={classes.submitBtn}>Сохранить</button>
            </form>
        </div>
    );
};

export default Settings;