import React from 'react';
import classes from "../../pages/NewProduct/NewProduct.module.css";

const MainInfo = ({gameInfo, setGameInfo}) => {
    return (
        <div className={classes.game__main__info}>
            <div className={classes.game__main__info__item}>
                <h4>Жанр</h4>
                <input type="text" onChange={e => (setGameInfo({...gameInfo, genre: e.target.value}))} value={gameInfo['genre']}/>
            </div>
            <div className={classes.game__main__info__item}>
                <h4>Платформа</h4>
                <input type="text" onChange={e => (setGameInfo({...gameInfo, platforms: e.target.value}))} value={gameInfo['platforms']}/>
            </div>
            <div className={classes.game__main__info__item}>
                <h4>Дата выхода</h4>
                <input type="text" onChange={e => (setGameInfo({...gameInfo, release_date: e.target.value}))} value={gameInfo['release_date']}/>

            </div>
            <div className={classes.game__main__info__item}>
                <h4>Издатель</h4>
                <input type="text" onChange={e => (setGameInfo({...gameInfo, publisher: e.target.value}))} value={gameInfo['publisher']}/>
            </div>
        </div>
    );
};

export default MainInfo;