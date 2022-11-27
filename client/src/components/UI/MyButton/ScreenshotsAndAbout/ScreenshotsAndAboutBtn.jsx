import React from 'react';
import classes from "./ScreenshotsAndAboutBtn.module.css";

const ScreenshotsAndAboutBtn = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>{children}</button>
    );
};

export default ScreenshotsAndAboutBtn;