import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({text, ...props}) => {
    return (
        <button className={classes.button} {...props}>{text}</button>
    );
};

export default MyButton;