import React, {useEffect} from 'react';
import classes from "../../pages/NewProduct/NewProduct.module.css";

const PriceBlock = ({gameInfo, setGameInfo}) => {

    useEffect(() => {
        setGameInfo({...gameInfo, discount_percent: (gameInfo['cost'] - gameInfo['discount']) / gameInfo['cost'] * 100});
    }, [gameInfo['cost'], gameInfo['discount']])

    return (
        <div className={classes.price__block}>
            <div className={classes.game__price}>
                <input className={classes.old__price} placeholder="Цена" value={gameInfo['cost']}
                       onChange={e => (setGameInfo({...gameInfo, cost: e.target.value}))}/>
                <input className={classes.new__price} placeholder="Цена со скидкой" value={gameInfo['discount']}
                       onChange={e => (setGameInfo({...gameInfo, discount: e.target.value}))}/>
                <input className={classes.discount} placeholder="Процент скидки" value={gameInfo['discount_percent'] + "%"} disabled/>
            </div>
        </div>
    );
};

export default PriceBlock;