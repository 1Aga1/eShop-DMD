import React, {useContext, useEffect, useState} from 'react';
import classes from "../../pages/GamePage/GamePage.module.css";
import GamePrice from "../GameCard/GamePrice";
import AddToBasketBtn from "../UI/MyButton/AddToBasket/AddToBasketBtn";
import {UserStatus} from "../../UserStatus";

const PriceBlock = ({GameData}) => {
    const [basketStatus,setBasketStatus] = useState(false)
    const {userCart} = useContext(UserStatus)

    useEffect(() => {
        userCart.filter(item => {
            if (item === GameData['id']) {
                setBasketStatus(true);
            }
            return true
        })
    })
    return (
        <div className={classes.price__block}>
            <GamePrice style={{fontSize: "25px", padding: "10px 0", margin: "10px 20px 10px 0"}}
                       id={GameData['id']}
                       name={GameData['name']}
                       cost={GameData['cost']}
                       discount={GameData['discount']}
                       discount_percent={GameData['discount_percent']}
            ></GamePrice>
            <AddToBasketBtn basketStatus={basketStatus} setBasketStatus={setBasketStatus} game_id={GameData['id']}></AddToBasketBtn>
        </div>
    );
};

export default PriceBlock;