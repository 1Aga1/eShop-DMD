import React from 'react';
import Header from "../../components/Header/Header";
import BigGameCard from "../../components/GameCard/BigGameCard";
import Footer from "../../components/Footer/Footer";
import classes from "./Basket.module.css"

const Basket = () => {
    return (
        <div className="cart">
            <Header></Header>
                <div className="main">
                    <div className="container">
                        <div className={classes.main__content}>
                            <div className={classes.content__header}>
                                <h1 className={classes.title}>Корзина</h1>
                            </div>
                            <div className={classes.content}>
                                <div className={classes.basket__list}>
                                    <BigGameCard></BigGameCard>
                                </div>
                                <div className={classes.basket__total}>
                                    <p className={classes.total__text}>Итого:</p>
                                    <p className={classes.total__number}>999 ₽</p>
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