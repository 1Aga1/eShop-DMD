import React, {useContext} from 'react';
import classes from "./AddToBasketBtn.module.css";
import {UserStatus} from "../../../../UserStatus";
import {useNavigate} from "react-router-dom";

const AddToBasketBtn = ({basketStatus, setBasketStatus, game_id}) => {

    const {authStatus} = useContext(UserStatus);

    const navigate = useNavigate()

    const addBasket = () => {
        if (authStatus === "auth") {
            setBasketStatus(true);
            fetch("/api/add_basket", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({"game_id": game_id})
            })
                .then(response => response.json())
                .then (response => {
                    if (response['status'] === "error") {
                        setBasketStatus(false);
                    };
                });
        } else {
            navigate("/signin")
        };
    };

    const removeBasket = () => {
        setBasketStatus(false);
        fetch("/api/remove_basket", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({"game_id": game_id})
        })
            .then(response => response.json())
            .then (response => {
                if (response['status'] === "error") {
                    setBasketStatus(true);
                };
            });
    };

    return (
        <div>
            {
                basketStatus === false
                    ? <button className={classes.button} onClick={addBasket}>В корзину</button>
                    : <button className={classes.button} onClick={removeBasket}>Убрать</button>
            }
        </div>
        
    );
};

export default AddToBasketBtn;