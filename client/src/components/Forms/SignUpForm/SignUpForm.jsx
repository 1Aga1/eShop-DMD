import React from 'react';
import SignInput from "../../UI/MyInput/Sign/SignInput";
import SignButton from "../../UI/MyButton/Sign/SignButton";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
    return (
        <form action="" className={classes.signup__form}>
            <h2 className={classes.title}>Регистрация</h2>
            <SignInput
                type="text"
                placeholder="Имя пользователя"
            />
            <SignInput
                type="text"
                placeholder="Электронная почта"
            />
            <SignInput
                type="password"
                placeholder="Пароль"
            />
            <SignInput
                type="password"
                placeholder="Подтвердите пароль"
            />
            <SignButton
                text="Зарегистрироваться"
                style={{border: "2px solid #fff", color: "#fff", cursor: "pointer"}}
            />
        </form>
    );
};

export default SignUpForm;