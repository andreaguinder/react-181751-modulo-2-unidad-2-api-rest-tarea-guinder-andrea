import { useState } from "react";
import styles from './Search.module.scss';

const Search = ({ onSearch, valorActual }) => {

    const handleSearch = (e) => {
        const valor = e.target.value;

        onSearch(valor);
    };

    return (

        <div className={styles.search}>
            <h1>Busca tu usuario</h1>
            <input type="text"
                placeholder="Busca el usuario que desees..."
                onChange={(e) => onSearch(e.target.value)}
                value={valorActual} />
        </div>
    )

}

export default Search;