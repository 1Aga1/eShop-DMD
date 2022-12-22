import React, {useState} from 'react';
import {Navigate} from 'react-router-dom'
import SignInput from "../../UI/MyInput/Sign/SignInput";
import SignButton from "../../UI/MyButton/Sign/SignButton";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
    const [UserData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const [alert, setAlert] = useState()

    const postUserData = () => {
        fetch("/api/register", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UserData)
        })
            .then(response => response.json())
            .then (response => {
                if (response['status'] === "error") {
                    setAlert(response['message'])
                }
                else {
                    return <Navigate to='/general'/>
                }
            })
    }

    return (
        <form className={classes.signup__form}>
            <h2 className={classes.title}>Регистрация</h2>
            <SignInput
                type="text"
                placeholder="Имя пользователя"
                onChange = {e => setUserData({...UserData, username: e.target.value})}
            />
            <SignInput
                type="text"
                placeholder="Электронная почта"
                onChange = {e => setUserData({...UserData, email: e.target.value})}
            />
            <SignInput
                type="password"
                placeholder="Пароль"
                onChange = {e => setUserData({...UserData, password: e.target.value})}
            />
            <SignInput
                type="password"
                placeholder="Подтвердите пароль"
                onChange = {e => setUserData({...UserData, confirm_password: e.target.value})}
            />
            <SignButton
                type="button"
                style={{border: "2px solid #fff", color: "#fff", cursor: "pointer"}}
                onClick={postUserData}
            >Зарегистрироваться</SignButton>
            <div className="alert">{alert}</div>
        </form>
    );
};

export default SignUpForm;