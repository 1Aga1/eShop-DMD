import React from 'react';
import classes from "./SignIn.module.css";
import SignInForm from "../../components/Forms/SignInForm/SignInForm";
import logo from "../../images/logo.svg";

const SignIn = () => {

    return (
        <div className={classes.block}>
            <div className={classes.signin__block}>
                <div className={classes.sign__selector}>
                    <div className={classes.to__signup}><a href="/signup">Регистрация</a></div>
                    <div className={classes.to__signin}><a href="/signin">Авторизация</a></div>
                </div>
                <SignInForm/>
                <div className={classes.logo}>
                    <img src={logo} alt="DMD shop"/>
                </div>
            </div>
            <div className={classes.shop__name}>
                <h1>Интернет-магазин <br/> цифровых товаров «DMD»</h1>
            </div>
        </div>
    );
};

export default SignIn;