import { Outlet, Link } from 'react-router-dom'
import './../utils/layout.css'

const Layout = () => {
  return (
    <div class="container">
      <nav class="navStyle">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/alumno">Alumnos</Link></li>
          <li><Link to="/profesor">Profesor</Link></li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout