import React, {useContext, useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import classes from "./Profile.module.css";
import Footer from "../../components/Footer/Footer";
import {UserStatus} from "../../UserStatus";

const Profile = () => {
    const {authStatus, userId} = useContext(UserStatus)
    const [UserData, setUserData] = useState({});

    useEffect(() => {
        if (authStatus === "auth") {
            fetch("/api/profile/" + userId, {
                method: "GET",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(response => response.json())
                .then(response => {
                    setUserData(response['user_data'])
                });
        };
    }, [authStatus]);

    return (
        <div className="profile">
            <Header></Header>
            <section className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.content__header}>
                            <h1 className={classes.title}>Профиль</h1>
                        </div>
                        <div className={classes.profile}>
                            <div className={classes.main_info}>
                                <div className={classes.avatar}>
                                    <img src={'http://localhost:5000/api/app/images/'+UserData['avatar']} alt=""/>
                                </div>
                                <div className={classes.user_info}>
                                    <div className={classes.username__n__role}>
                                        <p className={classes.username}>{UserData['username']}</p>
                                        <p className={classes.role}>{UserData['isAdmin']}</p>
                                    </div>
                                    <div className={classes.email}>Email: {UserData['email']}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Profile;