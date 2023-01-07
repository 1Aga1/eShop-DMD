import React from 'react';
import classes from "./GameCard.module.css";

const GamePrice = (props) => {
    return (
        <div>
            {props.discount_percent !== ""
            ? <div className={classes.game__price} style={props.style}>
                    <p className={classes.new__price}>{props.discount} ₽</p>
                    <p className={classes.old__price}>{props.cost} ₽</p>
                    <div className={classes.discount}>{props.discount_percent}</div>
                </div>
                :<p className={classes.game__price}>{props.cost} руб.</p>
            }

        </div>
    );
};

export default GamePrice;