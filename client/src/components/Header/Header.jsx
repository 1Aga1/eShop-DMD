import React, {useState} from 'react';
import classes from "./Header.module.css"
import logo from "../../images/logo.svg";
import loupe from "../../images/loupe.svg";
import FinderInput from "../UI/MyInput/Finder/FinderInput";

const Header = () => {
    const [isShowMenu, setShowMenu] = useState(true)

    const ShowMenu = () => {
        setShowMenu(!isShowMenu);
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 808) {
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
                        <FinderInput></FinderInput>
                    </div>
                    {isShowMenu &&
                        <div className={classes.menu}>
                            <a className={classes.menu__item} href="/general">Каталог</a>
                            <a className={classes.menu__item} href="/favorites">Избранное</a>
                            <a className={classes.menu__item} href="/basket">Корзина</a>
                            <div className={classes.sign__btn}>
                                <a href="/signin">Войти</a>
                            </div>
                        </div>

                    }
                    <button className={classes.burger} type='button' onClick={ShowMenu}></button>
                </div>
            </div>
        </div>
    );
};

export default Header;