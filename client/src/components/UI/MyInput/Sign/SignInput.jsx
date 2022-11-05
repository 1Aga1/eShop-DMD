import React from 'react';
import classes from './SignInput.module.css'

const SignInput = (props) => {
    return (
        <input className={classes.input} {...props}/>
    );
};

export default SignInput;