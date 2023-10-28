// utiliza libreria de react para renderizar el componente App en el elemento con id root
// el strict mode es para que se muestren los errores en consola
import React from 'react'
// Utiliza dom paara el renderizado
import ReactDOM from 'react-dom/client'
// Importa el componente App
import App from './App.jsx'
// Importa los estilos globales
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
