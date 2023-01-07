import React, {useState} from 'react';
import classes from './General.module.css'
import Header from "../../components/Header/Header";
import GameCard from "../../components/GameCard/GameCard";
import Footer from "../../components/Footer/Footer";
import { useEffect } from 'react';

const General = () => {
    const [ProductList, setProductList] = useState([]);

    const getProducts = () => {
        fetch("/api/general", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then (response => {
                setProductList(response['products']);
            })
    };

    useEffect(() => {
        getProducts()
    }, []);

    console.log(ProductList)

    return (
        <div className="general">
            <Header></Header>
            <section className="main">
                <div className="container">
                    <div className={classes.main__content}>
                        <div className={classes.content__header}>
                            <h1 className={classes.title}>Каталог товаров</h1>
                        </div>
                        <div className={classes.game__list}>
                            {ProductList.map((product) =>
                                <GameCard
                                    key={product['_id']}
                                    name={product['name']}
                                    cost={product['cost']}
                                    discount={product['discount']}
                                    discount_percent={product['discount_percent']}>

                                </GameCard>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default General;