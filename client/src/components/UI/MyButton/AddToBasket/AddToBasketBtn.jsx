import React, {useState} from 'react';
import classes from "./AddToBasketBtn.module.css";

const AddToBasketBtn = ({children, ...props}) => {

    const [inBasket, setInBasket] = useState(false);


    const addBasket = () => {
        fetch("/api/add_basket", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(game_id)
        })
            .then(response => response.json())
            .then (response => {
                if (response['user']['status'] === "auth") {
                    if (response['status'] === "done") {
                        setInBasket(true);
                    }                
                }
                else {
                    return <Navigate to='/signin'/>
                }
            })
    }

    const removeBasket = () => {
        fetch("/api/remove_basket", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(game_id)
        })
            .then(response => response.json())
            .then (response => {
                if (response['user']['status'] === "auth") {
                    if (response['status'] === "done") {
                        setInBasket(false);
                    }                
                }
                else {
                    return <Navigate to='/signin'/>
                }
            })
    }

    return (
        <div>
            {!inBasket && <button className={classes.button} {...props} onClick={addBasket}>В корзину</button>}
            {inBasket && <button className={classes.button} {...props} onClick={removeBasket}>Убрать</button>}
        </div>
        
    );
};

export default AddToBasketBtn;