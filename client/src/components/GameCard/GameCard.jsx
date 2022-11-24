import React from 'react';
import classes from "./GameCard.module.css";
import gta5logo from "../../images/gta 5 logo.svg";

const GameCard = () => {
    return (
        <a href="game#id123123">
            <div className={classes.game__card}>
                <img src={gta5logo} alt=""/>
                <div className={classes.card__info}>
                    <p className={classes.game__name}>Grand Theft Auto 5</p>
                    <p className={classes.game__price}>1599 руб.</p>
                </div>
            </div>
        </a>
    );
};

export default GameCard;