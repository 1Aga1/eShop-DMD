import React from 'react';
import classes from './FinderInput.module.css'

const FinderInput = (props) => {
    return (
        <input className={classes.input} {...props}/>
    );
};

export default FinderInput;