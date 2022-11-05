import React from 'react';
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";
import classes from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div className={classes.block}>
            <div className={classes.signup__block}>
                <div className={classes.sign__selector}>
                    <div className={classes.to__signup}><a href="/SignUp">Регистрация</a></div>
                    <div className={classes.to__signin}><a href="/SignIn">Авторизация</a></div>
                </div>
                <SignUpForm/>
            </div>
            <div className={classes.shop__name}>
                <h1>Интернет-магазин <br/> цифровых товаров «DMD»</h1>
            </div>
        </div>
    );
};

export default SignUp;