import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import classes from "./Favourites.module.css"

const Favourites = () => {
    return (
        <div className="favorites">
            <Header></Header>
            <div className="main">
                <div className="container">
                    <div className={classes.main__content}>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Favourites;