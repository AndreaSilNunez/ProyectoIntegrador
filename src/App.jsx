import { Route, Routes } from 'react-router-dom'
import ItemDetalle  from './Componentes/Productos/ItemDetalle/ItemDetalle'
import ItemListContainer from './Componentes/Productos/ItemListContainer/ItemListContainer'
import Layout from './Componentes/Layout/Layout'
import Carrito from './Componentes/Carrito/Carrito'
import FormularioContainer from './Componentes/Formularios/FormularioContainer'
import Productos from './Componentes/Productos/Productos'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1 className='text-center align-self-center'>Bienvenidos a mi Página</h1>} />
        <Route path="productos" element={<ItemListContainer mensaje="Nuestros productos" />} />
        <Route path="productos/:id" element={<ItemDetalle />} />
        <Route path="nuevo-producto" element={<FormularioContainer />} />
        <Route path="destacados" element={<Productos Mensaje="Productos Destacados" />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>
    </Routes>
  )
}

export default App