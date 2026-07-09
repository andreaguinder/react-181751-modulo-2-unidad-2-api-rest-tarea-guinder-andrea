import React from "react";
import styles from "./UsuarioCard.module.scss"

function UsuarioCard({ usuario }) {


    return (
        <div className={styles.card}>
            <h2>{usuario.name}</h2>
            <h3>{usuario.username}</h3>
            <p>{usuario.email}</p>
        </div>
    );
}

export default UsuarioCard;

