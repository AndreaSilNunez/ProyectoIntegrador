import { Link } from 'react-router-dom'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// 1. Importamos Link
export default  function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className='container'>
        <Link className="navbar-brand" to="/">
          MiTienda
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productos">
              Productos
            </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="/destacados">Destacados</Link>
          </li>
           {/* <li className="nav-item">
            <Link className="nav-link" to="/nuevo-producto">Alta de Productos</Link>
          </li> */}
          <li className="nav-item"> <Link className="nav-link" to="/carrito">
           <ShoppingCartIcon sx={{ mr: 1 }} />
            Carrito</Link> 
            </li>
        </ul>
      </div>
    </nav>
  );
};
