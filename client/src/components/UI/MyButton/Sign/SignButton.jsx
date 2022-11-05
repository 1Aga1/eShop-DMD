import React from 'react';
import classes from "./SignButton.module.css";

const SignButton = ({text, ...props}) => {
    return (
        <button className={classes.button} {...props}>{text}</button>
    );
};

export default SignButton;