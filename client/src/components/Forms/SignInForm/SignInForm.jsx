import React from 'react';
import SignInput from "../../UI/MyInput/Sign/SignInput";
import SignButton from "../../UI/MyButton/Sign/SignButton";
import classes from "./SignInForm.module.css";

const SignInForm = () => {
    return (
        <form action="" className={classes.signup__form}>
            <h2 className={classes.title}>Авторизация</h2>
            <SignInput
                type="text"
                placeholder="Имя пользователя"
            />
            <SignInput
                type="password"
                placeholder="Пароль"
            />
            <SignButton
                text="Войти"
                style={{border: "2px solid #fff", color: "#fff", cursor: "pointer"}}
            />
        </form>
    );
};

export default SignInForm;