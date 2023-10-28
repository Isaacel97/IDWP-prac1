// no es necesario importar react porque no se usa jsx
import { Alumno, Profesor, Layout } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

const App = () => {
  const titulo = "Componente alumnos";
  const detalle = "Cargando detalle desde app";

  const title = "Componente profesores";
  const etiHTML = (<><h2>Hola soy un sensei</h2><h3>Otro chimpallate</h3></>)

  return (
    <>
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
    </>
  )
}

export default App