import React, {useState} from 'react';
import SignInput from "../../UI/MyInput/Sign/SignInput";
import SignButton from "../../UI/MyButton/Sign/SignButton";
import classes from "./SignInForm.module.css";
import {Navigate} from "react-router-dom";

const SignInForm = () => {
    const [UserData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [alert, setAlert] = useState()

    const postUserData = () => {
        fetch("/api/auth", {
            method: "POST",
            cache: "no-cache",
            header: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UserData)
        }).then(response => response.json())
            .then (response => {
                console.log(response)
                if (response['status'] === "error") {
                    setAlert(response['message'])
                }
                else {
                    return <Navigate to='/general'/>
                }
            })
    }

    return (
        <form action="" className={classes.signup__form}>
            <h2 className={classes.title}>Авторизация</h2>
            <SignInput
                type="text"
                placeholder="Имя пользователя"
                onChange={e => setUserData({...UserData, username: e.target.value})}
            />
            <SignInput
                type="password"
                placeholder="Пароль"
                onChange={e => setUserData({...UserData, password: e.target.value})}
            />
            <SignButton
                type="button"
                style={{border: "2px solid #fff", color: "#fff", cursor: "pointer"}}
                onClick={postUserData}
            >Войти</SignButton>
            <div className="alert">{alert}</div>
        </form>
    );
};

export default SignInForm;