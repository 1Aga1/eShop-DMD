import React from 'react';
import classes from "../../pages/NewProduct/NewProduct.module.css";

const TitleBlock = ({gameInfo, setGameInfo}) => {
    return (
        <div className={classes.title__block}>
            <input className={classes.title} placeholder="Название товара" value={gameInfo['name']}
                   onChange={e => (setGameInfo({...gameInfo, name: e.target.value}))}/>
        </div>
    );
};

export default TitleBlock;