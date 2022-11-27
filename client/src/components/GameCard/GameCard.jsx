import React from 'react';
import classes from "./GameCard.module.css";
import gta5logo from "../../images/gta 5 logo.svg";
import GamePrice from "./GamePrice";

const GameCard = ({maxWidth, fontSize, padding, margin}) => {
    return (
        <a href="/game/id123123" style={{maxWidth: maxWidth}}>
            <div className={classes.game__card}>
                <img src={gta5logo} alt=""/>
                <div className={classes.card__info}>
                    <p className={classes.game__name} style={{fontSize: fontSize, padding: padding}}>Grand Theft Auto V</p>
                    <GamePrice style={{fontSize: fontSize, padding: padding}}></GamePrice>
                </div>
            </div>
        </a>
    );
};

export default GameCard;