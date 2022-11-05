import React from 'react';
import classes from "./SignIn.module.css";
import SignInForm from "../../components/Forms/SignInForm/SignInForm";

const SignIn = () => {
    return (
        <div className={classes.block}>
            <div className={classes.signin__block}>
                <div className={classes.sign__selector}>
                    <div className={classes.to__signup}><a href="/SignUp">Регистрация</a></div>
                    <div className={classes.to__signin}><a href="/SignIn">Авторизация</a></div>
                </div>
                <SignInForm/>
            </div>
            <div className={classes.shop__name}>
                <h1>Интернет-магазин <br/> цифровых товаров «DMD»</h1>
            </div>
        </div>
    );
};

export default SignIn;