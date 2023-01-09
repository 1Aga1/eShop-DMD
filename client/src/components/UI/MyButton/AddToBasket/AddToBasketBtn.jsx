import React from 'react';
import classes from "./AddToBasketBtn.module.css";

const AddToBasketBtn = ({basketStatus, setBasketStatus, game_id}) => {

    const addBasket = () => {
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
                if (response['status'] === "done") {
                    setBasketStatus(true);
                };
            });
    };

    const removeBasket = () => {
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
                if (response['status'] === "done") {
                    setBasketStatus(false);
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