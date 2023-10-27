import React from 'react';
import { useState } from 'react';
import { Button,Control,Container } from 'react-bootstrap';

export const FormularioLogin = ({ setUser }) => {
     const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usuario === "" || contrasena === "") {
            setError(true);
            return
        }
        setError(false);

        setUser([usuario]);
    }



  return (
    <section style={{display: 'flex',flexDirection:'column',  justifyContent: 'center', alignItems: 'center', height: '50vh',padding:'10px' }}>

        <h1>Login</h1>

        <form 
        style={{display:'flex', flexDirection: 'column'}}
        onSubmit={handleSubmit}
        >
            <input 
            type='text' style={{margin:'10px'}}
            value={usuario}
            onChange={event => setUsuario(event.target.value)}
            />
            <input 
            type='password' 
            style={{margin:'10px'}}
            value={contrasena}
            onChange={e => setContrasena( e.target.value)}
            />
            <Button type='submit' style={{margin:'10px 10px'}}>Inicial Sesion</Button>      
            {/* <button>Iniciar sesion</button> */}
        </form>
        {error && <p>Todos los campos son obligatorios</p>}


    </section>
  )
}
