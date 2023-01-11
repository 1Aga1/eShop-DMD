import React from 'react';
import Header from "../../components/Header/Header";
import classes from "../General/General.module.css";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
    return (
        <div className="profile">
            <Header></Header>
            <section className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.content__header}>
                            <h1 className={classes.title}>Профиль</h1>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Profile;