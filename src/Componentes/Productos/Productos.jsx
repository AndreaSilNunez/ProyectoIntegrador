import { useEffect, useState } from "react";

export default function Productos({ Mensaje }) {

    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('../Public/data/Productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
            })
            .catch((error) => {
                setError(error.message);
                console.log("Error no cargo nada");
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
        <div>
            <h1>{Mensaje}</h1>
            <ul className="list-group align-items-center">
                {productos
                        .filter((producto) => producto.destacado === true)
                        .map((producto) => (
                    <li className="list-group-item align-items-center"
                        style={{
                            width: "350px",
                            height: "320px",
                            textAlign: "center",
                            }}
                        key={producto.id}>
                        <h2>{producto.nombre}</h2>
                        <img src={producto.imagen} alt={producto.nombre} width="150" height="150"/>
                        <p>Precio: ${producto.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}