import { useEffect, useState } from "react";
import ItemList from "../ItemList/Itemlist";

import { Link } from "react-router-dom";

export default function ItemListContainer({ mensaje }) {

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        fetch('/Data/Productos.json')

            .then((respuesta) => {

                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }

                return respuesta.json();
            })

            .then((datos) => {
                console.log(datos);
                setProductos(datos);
            })

            .catch((error) => {
                console.log(error);
                setError(error.message);
            })

            .finally(() => {
                setCargando(false);
            });

    }, []);

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container align-self-center justify-content-between">

            <h4>{mensaje}</h4>

            <div className="row align-items-center m-3">
                <ItemList productos={productos} />
            </div>
             <div className="row align-items-center m-3">
                <Link to="/nuevo-producto" className="btn btn-primary">
                    Agregar producto
                    </Link>
            </div>

        </div>
    );
}