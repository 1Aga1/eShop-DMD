import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import BigGameCard from "../../components/GameCard/BigGameCard";
import Footer from "../../components/Footer/Footer";
import classes from "./Basket.module.css"
import {UserStatus} from "../../UserStatus";
import {useNavigate} from "react-router-dom";

const Basket = () => {
    const [GameList, setGameList] = useState([]);
    const [TotalPrice, setTotalPrice] = useState();
    const {authStatus} = useContext(UserStatus);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/basket", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then (response => {
                setGameList(response['products']);
                setTotalPrice(response['total_price']);
            });
    }, []);

    const BuyGame = () => {
        if (authStatus == "aut") {
            fetch("/api/buying_game", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(GameList)
            })
                .then(response => response.json())
                .then(response => {
                    setGameList(response['products']);
                    setTotalPrice(response['total_price']);
                });
        } else {
            navigate("/signin")
        }
    };

    return (
        <div className="basket">
            <Header></Header>
                <div className="main">
                    <div className="container">
                        <div className={classes.main__content}>
                            <div className={classes.content__header}>
                                <h1 className={classes.title}>Корзина</h1>
                            </div>
                            <div className={classes.content}>
                                <div className={classes.basket__list}>
                                    {GameList === []
                                        ?
                                            <p>В корзине пусто :(</p>
                                        :
                                            GameList.map((game) =>
                                                <BigGameCard
                                                    key={game['id']}
                                                    id={game['id']}
                                                    name={game['name']}
                                                    cost={game['cost']}
                                                    discount={game['discount']}
                                                    discount_percent={game['discount_percent']}>
                                                </BigGameCard>
                                            )
                                    }
                                </div>
                                <div className={classes.xui__nazvanie__ot_ahtema}>
                                    <div className={classes.basket__total}>
                                        <p className={classes.total__text}>Итого:</p>
                                        <p className={classes.total__number}>{TotalPrice} ₽</p>
                                    </div>
                                    <button className={classes.buy__btn} onClick={BuyGame}>Оформить покупку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Basket;