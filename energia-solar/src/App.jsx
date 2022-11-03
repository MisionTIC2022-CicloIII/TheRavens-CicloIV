import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Layout
import Layout from './Layout/Layout.jsx';

//Components
import Home from './pages/Home'
import Formulario from './pages/Formulario'

//styles
import '../src/assets/css/normalize.css';
import '../src/assets/css/styles.css';
import './App.css';
import '../src/assets/css/Articulo.module.css';


//pages
import ListaArticulos from './pages/ListaArticulos';
import DetalleArticulo from './pages/DetalleArticulo.jsx';

function App() {
  return (
    <BrowserRouter>

        <Routes>
          {/*Rutas publicas */}
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='contacto' element={<Formulario/>}/>
            <Route path='lista-articulos' element={<ListaArticulos/>}/>
            <Route path='articulo/:id' element={<DetalleArticulo/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    
  )
}
export default App
