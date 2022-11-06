import React from 'react';
import classes from "./SignButton.module.css";

const SignButton = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>{children}</button>
    );
};

export default SignButton;