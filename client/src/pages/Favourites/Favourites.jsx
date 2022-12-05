import React from 'react';
import Header from "../../components/Header/Header";
import GameCard from "../../components/GameCard/GameCard";
import Footer from "../../components/Footer/Footer";

import classes from "./Favourites.module.css"

const Favourites = () => {
    return (
        <div className="favourites">
            <Header></Header>
            <div className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.content__header}>
                            <h1 className={classes.title}>Избранное</h1>
                        </div>
                        <div className={classes.favourites__list}>
                            <GameCard></GameCard>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Favourites;