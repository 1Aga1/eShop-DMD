import React from 'react';
import classes from "./GameCard.module.css";

const GamePrice = (props) => {
    return (
        /*Если нет скидки, то рендерим это*/
        /*<p className={classes.game__price}>1999 руб.</p>*/
        /*Если есть скидка, то рендерим это*/
        <div className={classes.game__price} {...props}>
            <p className={classes.new__price}>999 ₽</p>
            <p className={classes.old__price}>1999 ₽</p>
            <div className={classes.discount}>-50%</div>
        </div>
    );
};

export default GamePrice;