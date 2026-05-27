import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./item.module.css";

export default function ItemDetalle() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {

    fetch("/Data/Productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {

        const productoEncontrado = datos.find(
          (prod) => prod.id === Number(id)
        );

        setProducto(productoEncontrado);
      });

  }, [id]);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  if (!producto) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <div className="col-md-4 m-3 align-items-center">

      <div className={`card ${styles.card}`}>

       <img
        src={`/${producto.imagen}`}
        className={`card-img-top ${styles.cardImg}`}
        alt={producto.nombre}
      />

        <div className="card-body">

          <h5 className="card-title">
            {producto.nombre}
          </h5>

          <p className="card-text">
            ${producto.precio}
          </p>

          <p>
            Stock: {producto.stock}
          </p>
          <p>
            {producto.descripcion}
          </p>

            <div className="d-flex justify-content-between align-items-center">
              
            <button className="btn btn-primary">
              Añadir producto
            </button>

            <span
              className={styles.estrella} 
              onClick={toggleFavorito}
            >
              {favorito ? "⭐" : "☆"}
            </span>

          </div>

        </div>
      </div>
    </div>
  );
};