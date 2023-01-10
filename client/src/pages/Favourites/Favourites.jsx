import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import GameCard from "../../components/GameCard/GameCard";
import Footer from "../../components/Footer/Footer";

import classes from "./Favourites.module.css"

const Favourites = () => {
    const [GameList, setGameList] = useState([]);

    useEffect(() => {
        fetch("/api/favourites", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then (response => {
                setGameList(response);
            });
    }, [])

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
                            {GameList !== []
                                ?
                                GameList.map((game) =>
                                    <GameCard
                                        key={game['id']}
                                        id={game['id']}
                                        name={game['name']}
                                        cost={game['cost']}
                                        discount={game['discount']}
                                        discount_percent={game['discount_percent']}>
                                    </GameCard>
                                )
                                :
                                <p>Список избранного пуст</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Favourites;