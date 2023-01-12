import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import classes from "./GameCard.module.css";
import notfound from "../../images/img_n_found.png";
import GamePrice from "./GamePrice";
import AddToBasketBtn from "../UI/MyButton/AddToBasket/AddToBasketBtn";
import {UserStatus} from "../../UserStatus";

const GameCard = (props) => {
    const [isShowAddToBasket, SetShowAddToBasket] = useState(false);

    const [basketStatus, setBasketStatus] = useState(false)

    const {userCart} = useContext(UserStatus);

    useEffect(() => {
        userCart.filter(item => {
            if (item === props.id) {
                setBasketStatus(true);
            }
            return true
        })
    })

    const ShowAddToBasket = () => {
        SetShowAddToBasket(true);
    };

    const HideAddToBasket = () => {
        SetShowAddToBasket(false);
    };

    return (
        <Link to={"/game/"+props.id} style={{maxWidth: props.maxWidth}} onMouseEnter={ShowAddToBasket} onMouseLeave={HideAddToBasket}>
            <div className={classes.game__card}>
                <img src={notfound} alt=""/>
                <div className={classes.card__info}>
                    <p className={classes.game__name} style={{fontSize: props.fontSize, padding: props.padding}}>{props.name}</p>
                    <GamePrice style={{fontSize: props.fontSize, padding: props.padding}}
                               cost={props.cost}
                               discount={props.discount}
                               discount_percent={props.discount_percent}>
                    </GamePrice>
                </div>
            </div>
            {isShowAddToBasket &&
                <div className="add__to__basket">
                    <div className={classes.add__to__basket__bg}></div>
                    <div className={classes.btn__block}>
                        <AddToBasketBtn basketStatus={basketStatus} setBasketStatus={setBasketStatus} game_id={props.id}></AddToBasketBtn>
                    </div>
                </div>
            }
        </Link>
    );
};

export default GameCard;