import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import BigGameCard from "../../components/GameCard/BigGameCard";
import Footer from "../../components/Footer/Footer";
import classes from "./Basket.module.css"

const Basket = () => {
    const [GameList, setGameList] = useState([]);
    const [TotalPrice, setTotalPrice] = useState();

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
    }, [])

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
                                <div className={classes.basket__total}>
                                    <p className={classes.total__text}>Итого:</p>
                                    <p className={classes.total__number}>{TotalPrice} ₽</p>
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