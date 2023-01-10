import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import TitleBlock from "../../components/GamePage/TitleBlock";
import PriceBlock from "../../components/GamePage/PriceBlock";
import MainInfo from "../../components/GamePage/MainInfo";
import AboutScreenshots from "../../components/GamePage/AboutScreenshots";
import Footer from "../../components/Footer/Footer";

import classes from "./GamePage.module.css";

import gta5logo from "../../images/gta 5 logo.svg";
import {useLocation} from "react-router-dom";

const GamePage = () => {
    const [GameData, setGameData] = useState({});


    const location = useLocation();

    useEffect(() => {
        fetch("/api/" + location.pathname, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then (response => {
                setGameData(response[0]);
            });
    }, []);

    return (
        <div className="game__page">
            <Header></Header>
            <div className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.game}>
                            <div className={classes.game__logo}>
                                <img src={gta5logo} alt="Game logo"/>
                            </div>
                            <div className={classes.game__info}>
                                <TitleBlock GameData={GameData}/>
                                <PriceBlock GameData={GameData}/>
                                <MainInfo GameData={GameData}/>
                            </div>
                            <AboutScreenshots GameData={GameData}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default GamePage;