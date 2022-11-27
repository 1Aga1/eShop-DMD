import React from 'react';
import classes from "./AddToBasketBtn.module.css";

const AddToBasketBtn = ({children, ...props}) => {
    return (
        <button className={classes.button} {...props}>{children}</button>
    );
};

export default AddToBasketBtn;