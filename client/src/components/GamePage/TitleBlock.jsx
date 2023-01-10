import React, {useContext, useEffect, useState} from 'react';
import classes from "../../pages/GamePage/GamePage.module.css";
import {UserStatus} from "../../UserStatus";
import {useNavigate} from "react-router-dom";

const TitleBlock = ({GameData}) => {
    const [isFavourites,SetFavourites] = useState(false)
    const {authStatus, userFavourites} = useContext(UserStatus);
    const navigate = useNavigate();

    useEffect(() => {
        userFavourites.filter(item => {
            if (item === GameData['id']) {
                SetFavourites(true);
            }
            return true
        });
    })

    const AddToFavourites = () => {
        if (authStatus === "auth") {
            SetFavourites(true);
            fetch("/api/add_favourites", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({'game_id': GameData['id']})
            })
                .then(response => response.json())
                .then (response => {
                    if (response['status'] === "error") {
                        SetFavourites(false);
                    };
                });
        } else {
            navigate("/signin")
        }
    };

    const RemoveFavourites = () => {
        SetFavourites(false);
        fetch("/api/remove_favourites", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({'game_id': GameData['id']})
        })
            .then(response => response.json())
            .then (response => {
                if (response['status'] === "error") {
                    SetFavourites(true);
                };
            });
    };

    return (
        <div className={classes.title__block}>
            <h2 className={classes.title}>{GameData['name']}</h2>
            {isFavourites === false ?
                <button className={classes.add_to_favourites__btn} onClick={AddToFavourites}>
                    <div className={classes.add_to_favourites}></div>
                </button>
                :
                <button className={classes.add_to_favourites__btn} onClick={RemoveFavourites}>
                    <div className={classes.in_favourites}></div>
                </button>
            }
        </div>
    );
};

export default TitleBlock;