import React, {useContext, useEffect, useState} from 'react';
import classes from "../../pages/GamePage/GamePage.module.css";
import GamePrice from "../GameCard/GamePrice";
import AddToBasketBtn from "../UI/MyButton/AddToBasket/AddToBasketBtn";
import {UserStatus} from "../../UserStatus";
import {useNavigate} from "react-router-dom";

const PriceBlock = ({GameData}) => {
    const [basketStatus,setBasketStatus] = useState(false);
    const {authStatus, isAdmin, userCart} = useContext(UserStatus);
    const navigate = useNavigate();

    useEffect(() => {
        userCart.filter(item => {
            if (item === GameData['id']) {
                setBasketStatus(true);
            };
            return true
        });
    });

    const deleteProduct = () => {
        if (authStatus === "auth") {
            setBasketStatus(true);
            fetch("/api/delete_product", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({"game_id": GameData['id']})
            })
                .then(response => response.json())
                .then (response => {
                    if (response['status'] === "done") {
                        navigate("/general")
                    };
                });
        } else {
            navigate("/signin")
        };
    };

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
            {isAdmin &&
                <button className={classes.delete} onClick={deleteProduct}>Удалить товар</button>
            }
        </div>
    );
};

export default PriceBlock;