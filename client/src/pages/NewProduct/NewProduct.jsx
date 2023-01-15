import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import classes from "./NewProduct.module.css"
import Footer from "../../components/Footer/Footer";
import TitleBlock from "../../components/NewProduct/TitleBlock";
import PriceBlock from "../../components/NewProduct/PriceBlock";
import MainInfo from "../../components/NewProduct/MainInfo";
import AboutScreenshots from "../../components/NewProduct/AboutScreenshots";
import {UserStatus} from "../../UserStatus";
import {useNavigate} from "react-router-dom";

const NewProduct = () => {
    const gameInfoNull = {
        "mainImage": null,
        "name": "",
        "cost": "",
        "discount": "",
        "discount_percent": NaN,
        "genre": "",
        "platforms": "",
        "release_date": "",
        "publisher": "",
        "about_game": "",
        "screenshots": []
    };

    const [gameInfo, setGameInfo] = useState({
        "mainImage": null,
        "name": "",
        "cost": "",
        "discount": "",
        "discount_percent": NaN,
        "genre": "",
        "platforms": "",
        "release_date": "",
        "publisher": "",
        "about_game": "",
        "screenshots": []
    });

    const [alert, setAlert] = useState("")
    const {authStatus, isAdmin} = useContext(UserStatus)
    const navigate = useNavigate();

    useEffect(() => {
        if (authStatus !== "auth" && isAdmin !== true) {
            navigate("/signin")
        }
    }, [authStatus, isAdmin])

    const createProduct = () => {
        setAlert("")
        if (JSON.stringify(gameInfo) !== JSON.stringify(gameInfoNull)) {
            fetch("/api/new_product", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(gameInfo)
            })
                .then(response => response.json())
                .then(response => {
                    if (response['status'] === "done") {
                        setGameInfo(gameInfoNull)
                    } else {
                        setAlert(response['message'])
                    }
                    ;
                });
        } else {
            setAlert("Заполните все поля!")
        }
    };


    const addMainImg = (img) => {
        const mainImage = new FormData();
        mainImage.append("file", img)

        fetch("/api/upload_file", {
            method: "POST",
            body: mainImage,
        })
            .then(response => response.json())
            .then(response => {
                if (response['status'] === "done") {
                    setGameInfo({...gameInfo, mainImage: response['filename']});
                }
            });

    }

    const deleteMainImg = () => {
        setGameInfo({...gameInfo, mainImage: null});
    }

    return (
        <div className="game__page">
            <Header></Header>
            <div className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.game}>
                            <div className={classes.game__logo}>
                                {gameInfo['mainImage'] != null
                                ?
                                    <div className={classes.selected__img}>
                                        <img alt="not found"  src={gameInfo['mainImage']}/>
                                        <button className={classes.delete__img} onClick={() => (deleteMainImg())}>Удалить</button>
                                    </div>
                                :
                                    <label className={classes.input__file}>
                                        <input type="file" name="file"
                                               onChange={(e) => (addMainImg(e.target.files[0]))}/>
                                        <span>Выберите файл</span>
                                    </label>
                                }
                            </div>
                            <div className={classes.game__info}>
                                <TitleBlock  gameInfo={gameInfo} setGameInfo={setGameInfo}/>
                                <PriceBlock gameInfo={gameInfo} setGameInfo={setGameInfo}/>
                                <MainInfo gameInfo={gameInfo} setGameInfo={setGameInfo}/>
                            </div>
                            <AboutScreenshots gameInfo={gameInfo} setGameInfo={setGameInfo}/>
                        </div>
                        <button className={classes.create} onClick={createProduct}>Создать</button>
                        <div className="alert">{alert}</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewProduct;