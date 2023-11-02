
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [persona, setPersona] = useState({
    nombre: '',
    color: ''
  })
  
  const [error, setError] = useState(false)
  const [correcto, setCorrecto] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nombreValidado = persona.nombre.trim();

    if ((nombreValidado.length >= 3) && (persona.color.length >= 6)){
      setError(false)
      setCorrecto(true)      
    }else{
      setError(true)
      setCorrecto(false)
    }

  }

  return (
    <>
    
      <h1>Elige un color</h1>    

      {!correcto &&      
      <form onSubmit={handleSubmit}>        
        <label>Nombre</label>
        <br />
        <input type="text" placeholder='Ingrese su nombre' value={persona.nombre} onChange={(e) => setPersona({...persona, nombre: e.target.value})}/>
        <br />
        <label>Color</label>
        <br />
        <input type="text" placeholder='Ingrese su color favorito' value={persona.color} onChange={(e) => setPersona({...persona, color: e.target.value})}/>
        <br />
        <button type='submit'>Enviar</button>
      </form>
      }

      {correcto && <Card nombre={persona.nombre} color={persona.color}/>}
      {error && <h3>Por favor chequea que la información sea correcta</h3>} 
    

           
      
    </>
  )
}

export default App
