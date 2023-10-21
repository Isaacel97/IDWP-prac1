import React, {useState} from 'react'
const Alumno = ({titulo, detalle = "Cargando detalle"}) => {

    const [nombre, setNombre] = useState("Bienvenido");
    const eventInput = (e) => {
        setNombre(e.target.value);
    }

    const reset = () => {
        eventInput({target: {value: ""}})
        setNombre("Bienvenido");
    }
  return (
    <div>
        <h1>{titulo}</h1>
        <p>{detalle}</p>
        <input 
            type="text" 
            placeholder="Ingrese su nombre" 
            onChange={eventInput}
        />
        <p>{nombre}</p>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Alumno