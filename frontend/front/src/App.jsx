// no es necesario importar react porque no se usa jsx
import Alumno from "./components/Alumno"
import Layout from "./components/Layout"
import Profesor from "./components/Profesor"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

const App = () => {
  const titulo = "Componente alumnos";
  const detalle = "Cargando detalle desde app";

  const title = "Componente profesores";
  const etiHTML = (<><h2>Hola soy un sensei</h2><h3>Otro chimpallate</h3></>)

  return (
    <div>
     <div className="containerHeader">
      <h1>Konnichiwa minna!</h1>
     </div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Alumno/>}/>
          <Route path="alumno" element={<Alumno
            titulo={titulo}
            detalle={detalle} />} />
          <Route path="profesor" element={<Profesor
            title={title}>
              {etiHTML}
          </Profesor>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App