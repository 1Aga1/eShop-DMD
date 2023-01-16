import React from 'react';
import classes from "./GameCard.module.css";

const GamePrice = (props) => {
    return (
        <div>
            {props.discount_percent !== "0%"
                ?
                <div className={classes.game__price} style={props.style}>
                    <p className={classes.new__price}>{props.discount} ₽</p>
                    <p className={classes.old__price}>{props.cost} ₽</p>
                    <div className={classes.discount}>-{props.discount_percent}</div>
                </div>
                :
                <p className={classes.game__price} style={props.style}>{props.cost} ₽</p>
            }
        </div>
    );
};

export default GamePrice;