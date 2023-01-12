import React from 'react';
import notfound from "../../images/img_n_found.png";
import GamePrice from "./GamePrice";
import {Link} from "react-router-dom";
import classes from "./SearchGameCard.module.css";

const SearchGameCard = (props) => {
    return (
        <Link to={"/game/"+props.id}>
            <div className={classes.game__card}>
                <img src={notfound} alt=""/>
                <div className={classes.card__info}>
                    <p className={classes.game__name}>{props.name}</p>
                    <GamePrice style={{fontSize: "16px", margin: "10px 0 0 0", padding: 0}}
                               cost={props.cost}
                               discount={props.discount}
                               discount_percent={props.discount_percent}>
                    </GamePrice>
                </div>
            </div>
        </Link>
    );
};

export default SearchGameCard;