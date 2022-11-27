import React, {useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GamePrice from "../../components/GameCard/GamePrice";
import GameCard from "../../components/GameCard/GameCard";
import AddToBasketBtn from "../../components/UI/MyButton/AddToBasket/AddToBasketBtn";
import ScreenshotsAndAboutBtn from "../../components/UI/MyButton/ScreenshotsAndAbout/ScreenshotsAndAboutBtn";
import classes from "./GamePage.module.css";
import gta5logo from "../../images/gta 5 logo.svg";
import trevor from "../../images/trevor.svg";
import car from "../../images/car.svg";

const GamePage = () => {
    const [isShowScreenshots,SetShowScreenshots] = useState(true)
    const [isShowAbout,SetShowAbout] = useState(false)

    const SwitchToScreenshots = () => {
        SetShowScreenshots(true);
        SetShowAbout(false);
    }

    const SwitchToAbout = () => {
        SetShowScreenshots(false);
        SetShowAbout(true);
    }

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
                                <h2 className={classes.title}>Grand Theft Auto V</h2>
                                <div className={classes.price__block}>
                                    <GamePrice style={{fontSize: "25px", padding: "10px 0", margin: "10px 20px 10px 0"}}></GamePrice>
                                    <AddToBasketBtn>В корзину</AddToBasketBtn>
                                </div>
                                <div className={classes.game__main__info}>
                                    <div className={classes.game__main__info__item}>
                                        <h4>Жанр</h4>
                                        <p>Приключенческий боевик</p>
                                    </div>
                                    <div className={classes.game__main__info__item}>
                                        <h4>Платформа</h4>
                                        <p>PlayStation, XBOX, PC</p>
                                    </div>
                                    <div className={classes.game__main__info__item}>
                                        <h4>Дата выхода</h4>
                                        <p>17 сентября 2013</p>
                                    </div>
                                    <div className={classes.game__main__info__item}>
                                        <h4>Издатель</h4>
                                        <p>Rockstar Games, Take-Two Interactive</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.similar__games}>
                                <h3 className={classes.title}>Похожие игры</h3>
                                <div className={classes.card__block}>
                                    <GameCard maxWidth="145px" fontSize="14px" padding="5px"></GameCard>
                                    <GameCard maxWidth="145px" fontSize="14px" padding="5px"></GameCard>
                                </div>
                            </div>
                            <div className={classes.game__about__screenshots}>
                                <div className={classes.btn__block}>
                                    <ScreenshotsAndAboutBtn onClick={SwitchToScreenshots}>Скриншоты</ScreenshotsAndAboutBtn>
                                    <ScreenshotsAndAboutBtn onClick={SwitchToAbout}>Об игре</ScreenshotsAndAboutBtn>
                                </div>
                                {isShowScreenshots &&
                                    <div className={classes.screenshots}>
                                        <img src={trevor} alt="trevor"/>
                                        <img src={car} alt="car"/>
                                    </div>
                                }
                                {isShowAbout &&
                                    <div className={classes.game__about}>
                                        <p>Здесь должно быть описание игры, но игра не доступна в нашем регионе :)</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default GamePage;