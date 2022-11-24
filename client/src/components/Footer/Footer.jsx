import React from 'react';
import classes from "./Footer.module.css";
import logo from "../../images/logo.svg";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className="container">
                <div className={classes.footer__content}>
                    <img src={logo} alt="DMD shop"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;