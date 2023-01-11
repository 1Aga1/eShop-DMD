import React from 'react';
import classes from './FinderInput.module.css'

const FinderInput = (props) => {
    const Search = (searchTerm) => {
        if (searchTerm !== "") {
            fetch("/api/search", {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(searchTerm.trim())
            })
                .then(response => response.json())
                .then (response => {
                    props.setSearchResults(response);
                });
        } else {
            props.setSearchResults([]);
        }
    }

    return (
        <input className={classes.input} placeholder={props.placeholder} onChange={e => (Search(e.target.value))}/>
    );
};

export default FinderInput;