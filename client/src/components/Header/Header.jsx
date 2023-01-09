import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import classes from "./Header.module.css"
import logo from "../../images/logo.svg";
import loupe from "../../images/loupe.svg";
import FinderInput from "../UI/MyInput/Finder/FinderInput";
import {UserStatus} from "../../UserStatus";

const Header = () => {
    const [isShowMenu, setShowMenu] = useState(true)

    const {userId, username, authStatus, isAdmin} = useContext(UserStatus)

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
                        <FinderInput placeholder="Начните вводить..."></FinderInput>
                    </div>
                    {isShowMenu &&
                        <div className={classes.menu}>
                            {isAdmin &&
                                <Link className={classes.menu__item} to="/general">Добавить товар</Link>
                            }
                            <Link className={classes.menu__item} to="/general">Каталог</Link>
                            <Link className={classes.menu__item} to="/favourites">Избранное</Link>
                            <Link className={classes.menu__item} to="/basket">Корзина</Link>
                            {authStatus === "auth"
                                ?
                                    <div className={classes.profile}>
                                        <Link to={"/profile/" + userId}>{username}</Link>
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