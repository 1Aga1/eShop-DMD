import React, {useContext, useEffect} from 'react';
import classes from "./SignIn.module.css";
import SignInForm from "../../components/Forms/SignInForm/SignInForm";
import logo from "../../images/logo.svg";
import {UserStatus} from "../../UserStatus";
import {useNavigate, Link} from "react-router-dom";

const SignIn = () => {
    const {authStatus} = useContext(UserStatus);

    const navigate = useNavigate();

    useEffect(() => {
        if (authStatus === "auth") {
            navigate("/general");
        };
    });

    return (
        <div className={classes.block}>
            <div className={classes.signin__block}>
                <div className={classes.sign__selector}>
                    <div className={classes.to__signup}><Link to="/signup">Регистрация</Link></div>
                    <div className={classes.to__signin}><Link to="/signin">Авторизация</Link></div>
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