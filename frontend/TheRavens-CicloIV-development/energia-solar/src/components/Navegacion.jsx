import { Link } from "react-router-dom"

const Navegacion = () => {
  return (
    <>
      <div className="nav-bg">
         <nav className="navegacion-principal contenedor">
            <Link to="/">Quienes somos</Link>
            <Link to="lista-articulos">Combos Solares</Link>
            <Link to='contacto'>Contactenos</Link>
            
         </nav>
      </div>

    </>
  )
}

export default Navegacion