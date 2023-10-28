import React, { useState, useEffect } from 'react'
const Alumno = ({titulo, detalle = "Cargando detalle"}) => {
    const [text, setText] = useState("");
    const [alumnos, setAlumnos] = useState([]);
    
    const eventInput = (e) => {
        setText(e.target.value);
    }

    useEffect(()=>{
        fetch("http://localhost:3000/api/alumno")
        .then((res)=> res.json())
        .then((json)=> {
            console.log("seta")
            setAlumnos(json.map(c=>c))   
        })
    },[])

  return (
    <div>
        <h1>{titulo}</h1>
        <p>{detalle}</p>
        <input 
            type="text" 
            placeholder="Ingrese su nombre" 
            onChange={eventInput}
        />
        <p>{text}</p>
        <ul>
         {alumnos.map(alumno => (<li>{alumno.nombre + " " +alumno.email}</li>))}
        </ul>
    </div>
  )
}

export default Alumno