import { useEffect, useState } from "react";
import styles from "./Usuarios.module.scss";
import UsuarioCard from "../UsuarioCard/UsuarioCard";

let Usuarios = ({ filtro }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchUsuarios = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Error al obtener los usuarios");
                } else if (response.ok) {
                    const data = await response.json();
                    setUsuarios(data);
                    setLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);


    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>Error: {error}</p>;

    const usuariosFiltrados = usuarios.filter((u) =>
        u.name.toLowerCase().includes(filtro.toLowerCase()) ||
        u.username.toLowerCase().includes(filtro.toLowerCase())
    );

    return (

        <ul className={styles.containerCards}>
            {usuariosFiltrados.map(usuario => (
                <li key={usuario.id}><UsuarioCard key={usuario.id} usuario={usuario} /></li>
            ))}
        </ul>
    );
}

export default Usuarios;
