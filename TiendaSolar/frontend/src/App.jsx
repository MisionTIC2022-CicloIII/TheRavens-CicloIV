import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Context
import { AuthProvider } from "./context/AuthProvider.jsx";
import { UsuariosProvider } from "./context/UsuariosProvider.jsx";
import { ProductosProvider } from "./context/ProductosProvider.jsx";
// Layout (LayoutAuth)
import LayoutAuth from "./Layout/LayoutAuth.jsx";
import RutaProtegida from "./Layout/RutaProtegida.jsx";
// pages (usuarios)
import Login from "./Pages/Login.jsx";
import Registro from "./Pages/Usuario/Registro.jsx";
import OlvidePassword from "./Pages/Usuario/OlvidePassword.jsx";
import Confirmar from "./Pages/Usuario/Confirmar.jsx";
// pages (usuarios protegidas)
import Perfil from "./Pages/Usuario/Perfil.jsx";
import CambiarPassword from "./Pages/Usuario/CambiarPassword.jsx";
// pages (productos)
import ListaProductos from "./Pages/productos/ListaProductos.jsx";
import FormularioProductos from "./Pages/productos/FormularioProductos.jsx";
import DetalleProducto from "./Pages/productos/DetalleProducto.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <UsuariosProvider>
          <ProductosProvider>
            <Routes>
              {/* RUTAS PUBLICAS */}
              <Route path="/" element={<LayoutAuth />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<Registro />} />
                <Route path="olvide-password" element={<OlvidePassword />} />
                <Route path="confirmar/:id" element={<Confirmar />} />
              </Route>
              {/* Rutas Protegidas */}
              <Route path="/perfil" element={<RutaProtegida />}>
                <Route index element={<Perfil />} />
                <Route path="cambiar-password" element={<CambiarPassword />} />
              </Route>
              <Route path="/productos" element={<RutaProtegida />}>
                <Route index element={<ListaProductos />} />
                <Route
                  path="agregar-producto"
                  element={<FormularioProductos />}
                />
                <Route
                  path="detalle-producto/:id"
                  element={<DetalleProducto />}
                />
              </Route>
            </Routes>
          </ProductosProvider>
        </UsuariosProvider>
      </AuthProvider>
    </Router>
  );
}
export default App;
