import React from 'react';
import s from './footer.module.css'
import {Typography} from "@mui/material";
const Footer = () => {
    return (
        <footer className={s.footer}>
            <Typography variant={'body1'}>Copyright © Social Network 2023</Typography>
        </footer>
    );
};
export default Footer;