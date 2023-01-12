import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import classes from "./Header.module.css"
import logo from "../../images/logo.svg";
import loupe from "../../images/loupe.svg";
import FinderInput from "../UI/MyInput/Finder/FinderInput";
import SearchGameCard from "../GameCard/SearchGameCard";
import {UserStatus} from "../../UserStatus";

const Header = () => {
    const [isShowMenu, setShowMenu] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    const {userId, username, authStatus, isAdmin, setAuthStatus} = useContext(UserStatus)

    const Logout = () => {
        fetch("/api/logout", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then (response => {
                if (response['status'] === "done") {
                    setAuthStatus("unauth")
                };
            });
    }

    const ShowMenu = () => {
        setShowMenu(!isShowMenu);
    }

    useEffect(() => {
        if (window.innerWidth <= 920) {
            setShowMenu(false)
        }
        else {
            setShowMenu(true)
        }
    }, [])

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 920) {
            setShowMenu(false)
        }
        else {
            setShowMenu(true)
        }
    });

    return (
        <div className={classes.header}>
            <div className="container">
                <div className={classes.header__content}>
                    <div className={classes.logo}>
                        <a href="/general"><img src={logo} alt="DMD shop"/></a>
                    </div>
                    <div className={classes.finder}>
                        <img className={classes.loupe} src={loupe} alt=""/>
                        <FinderInput placeholder="Начните вводить..."
                                     setSearchResults={setSearchResults}
                        >
                        </FinderInput>
                        <div className={classes.search__result}>
                            {searchResults.map((game) =>
                                <SearchGameCard
                                    key={game['id']}
                                    id={game['id']}
                                    name={game['name']}
                                    cost={game['cost']}
                                    discount={game['discount']}
                                    discount_percent={game['discount_percent']}>
                                </SearchGameCard>
                            )}
                        </div>

                    </div>
                    {isShowMenu &&
                        <div className={classes.menu}>
                            {isAdmin &&
                                <Link className={classes.menu__item} to="/new_product">Добавить товар</Link>
                            }
                            <Link className={classes.menu__item} to="/general">Каталог</Link>
                            <Link className={classes.menu__item} to="/favourites">Избранное</Link>
                            <Link className={classes.menu__item} to="/basket">Корзина</Link>
                            {authStatus === "auth"
                                ?
                                    <div className={classes.profile}>
                                        <Link to={"/profile/" + userId}>{username}</Link>
                                        <div onClick={Logout} className={classes.sign__out}>Выйти</div>
                                    </div>
                                :
                                    <div className={classes.sign__btn}>
                                        <Link to="/signin">Войти</Link>
                                    </div>
                            }
                        </div>

                    }
                    <button className={classes.burger} type='button' onClick={ShowMenu}></button>
                </div>
            </div>
        </div>
    );
};

export default Header;