import { useState } from "react";
import { Link } from "react-router-dom";


export default function Item ({ id, nombre, precio, stock, imagen }) {

  const [cantidad, setCantidad] = useState(0);
      const incrementar = () => {
      if (cantidad < stock) {
      setCantidad(cantidad + 1);
      }
      };
      const decrementar = () => {
      if (cantidad > 1) {
      setCantidad(cantidad - 1);
      }
      };
      const agregarAlCarrito = () => {
      alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
      }
        
  return (
     <div className="col-12 col-md-4">

            <div className="card p-3 h-100">
                 <img src={imagen} alt={nombre} width="150" height="150"/>
                <h3>{nombre}</h3>

                <Link to={`/productos/${id}`}>
                    Ver detalle
                </Link>

                <p>Precio: ${precio}</p>

                <p>Stock disponible: {stock}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent:
                    'center', margin: '10px 0' }}>
                    <button onClick={decrementar}>-</button>
                    <p style={{ margin: '0 10px' }}>{cantidad}</p>
                    <button onClick={incrementar}>+</button>
                    </div>
                <button onClick={agregarAlCarrito}>
                    Comprar
                </button>

            </div>

        </div>
  );
}