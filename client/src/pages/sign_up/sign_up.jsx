import React from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import classes from "./sign_up.module.css";

const SignUp = () => {
    return (
        <div className={classes.signup__block}>
            <form action="" className={classes.signup__form}>
                <h1 className={classes.signup__form_title}>Добро пожаловать в "DMD"!</h1>
                <MyInput
                    type="text"
                    placeholder="Имя пользователя"
                />
                <MyInput
                    type="text"
                    placeholder="Электронная почта"
                />
                <MyInput
                    type="password"
                    placeholder="Пароль"
                />
                <MyInput
                    type="password"
                    placeholder="Подтвердите пароль"
                />
                <MyButton
                    text="Зарегистрироваться"
                />
            </form>
            <div className={classes.to__signin}>Есть аккаунт? <a href="/sign_in">Войти</a></div>
        </div>
    );
};

export default SignUp;