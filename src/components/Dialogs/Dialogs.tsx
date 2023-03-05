import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog+ ' ' + classes.active}>Aleksandr</div>
                <div className={classes.dialog}>Denis</div>
                <div className={classes.dialog}>Nikita</div>
                <div className={classes.dialog}>Ivan</div>
                <div className={classes.dialog}>Viktor</div>
                <div className={classes.dialog}>Stepan</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello friend</div>
                <div className={classes.message}>How are you do?</div>
                <div className={classes.message}>Byi!</div>
            </div>
        </div>
    );
};
export default Dialogs;