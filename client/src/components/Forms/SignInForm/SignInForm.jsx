import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import SignInput from "../../UI/MyInput/Sign/SignInput";
import SignButton from "../../UI/MyButton/Sign/SignButton";
import classes from "./SignInForm.module.css";
import {UserStatus} from "../../../UserStatus";

const SignInForm = () => {
    const {setAuthStatus} = useContext(UserStatus);

    const [UserData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [alert, setAlert] = useState("");

    const navigate = useNavigate();

    const postUserData = () => {
        setAlert("")
        fetch("/api/auth", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UserData)
        }).then(response => response.json())
            .then (response => {
                if (response['status'] === "error") {
                    setAlert(response['message'])
                }
                else {
                    setAuthStatus("auth");
                    return navigate("/general");
                };
            });
    };

    return (
        <form className={classes.signup__form}>
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