import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {UserStatus} from "./UserStatus";
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('wrapper'));

const Main = () => {
    const [userId, setUserId] = useState("")
    const [username, setUsername] = useState("")
    const [isAdmin, setAdmin] = useState(false)
    const [authStatus, setAuthStatus] = useState("unauth");
    const [userCart, setUserCart] = useState([]);
    const [userFavourites, setUserFavourites] = useState([]);

    useEffect(() => {
        fetch("/api/login_required", {
            method: "GET",
            cache: "no-cache",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then (response => {
                if (response['status'] === "auth") {
                    setUserId(response['id']);
                    setUsername(response['username']);
                    setAdmin(response['isAdmin']);
                    setAuthStatus(response['status']);
                    setUserCart(response['cart']);
                    setUserFavourites(response['favourites'])
                }
            });

    }, []);

    return (
        <UserStatus.Provider value={{userId, username, isAdmin, authStatus, setAuthStatus, userCart, userFavourites}}>
            <App/>
        </UserStatus.Provider>
    )
}

root.render(
    <Main/>
);