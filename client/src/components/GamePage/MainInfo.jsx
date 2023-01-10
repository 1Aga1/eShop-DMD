import React from 'react';
import classes from "../../pages/GamePage/GamePage.module.css";

const MainInfo = ({GameData}) => {
    return (
        <div className={classes.game__main__info}>
            <div className={classes.game__main__info__item}>
                <h4>Жанр</h4>
                <p>{GameData['genre']}</p>
            </div>
            <div className={classes.game__main__info__item}>
                <h4>Платформа</h4>
                <p>{GameData['platforms']}</p>
            </div>
            <div className={classes.game__main__info__item}>
                <h4>Дата выхода</h4>
                <p>{GameData['release_date']}</p>
            </div>
            <div className={classes.game__main__info__item}>
                <h4>Издатель</h4>
                <p>{GameData['publisher']}</p>
            </div>
        </div>
    );
};

export default MainInfo;