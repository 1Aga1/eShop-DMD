import React, {useState} from 'react';
import classes from "./GameCard.module.css";
import gta5logo from "../../images/gta 5 logo.svg";
import GamePrice from "./GamePrice";
import AddToBasketBtn from "../UI/MyButton/AddToBasket/AddToBasketBtn";

const GameCard = ({maxWidth, fontSize, padding}) => {
    const [isShowAddToBasket, SetShowAddToBasket] = useState(false);

    const ShowAddToBasket = () => {
        SetShowAddToBasket(true)
    };

    const HideAddToBasket = () => {
        SetShowAddToBasket(false)
    };

    return (
        <a href="/game/id123123" style={{maxWidth: maxWidth}} onMouseEnter={ShowAddToBasket} onMouseLeave={HideAddToBasket}>
            <div className={classes.game__card}>
                <img src={gta5logo} alt=""/>
                <div className={classes.card__info}>
                    <p className={classes.game__name} style={{fontSize: fontSize, padding: padding}}>Grand Theft Auto V</p>
                    <GamePrice style={{fontSize: fontSize, padding: padding}}></GamePrice>
                </div>
            </div>
            {isShowAddToBasket &&
                <div className="add__to__basket">
                    <div className={classes.add__to__basket__bg}></div>
                    <div className={classes.btn__block}>
                        <AddToBasketBtn></AddToBasketBtn>
                    </div>
                </div>
            }
        </a>
    );
};

export default GameCard;