import { Outlet } from 'react-router-dom';

//components
import Header from '../components/Header.jsx'
import Navegacion from '../components/Navegacion.jsx'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <Navegacion/>
      <main className="contenedor sombra">
        <Outlet/>
      </main>
      

      <Footer/>


    </>
  )
}

export default Layout