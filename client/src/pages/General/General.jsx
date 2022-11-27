import React from 'react';
import classes from './General.module.css'
import Header from "../../components/Header/Header";
import GameCard from "../../components/GameCard/GameCard";
import Footer from "../../components/Footer/Footer";

const General = () => {
    return (
        <div className="general">
            <Header></Header>
            <section className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.content__header}>
                            <h1 className={classes.title}>Каталог товаров</h1>
                        </div>
                        <div className={classes.game__list}>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                            <GameCard></GameCard>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default General;