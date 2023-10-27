import React from 'react';
import { useState } from 'react'
import { Button,Navbar,Container } from 'react-bootstrap';
import {FormularioLogin} from './FormularioLogin'
import {Home} from './Home'

// import 'bootstrap/dist/css/bootstrap.min.css';

export const Boton = () => {
    const handleClick = () =>{
        alert('Botón clickeado')
    }
    const [user, setUser] = useState([]);

  return (
    <>
    <div>
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Checador chido</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Usuario: <a href="#login" style={{color: 'blueviolet'}}>Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    {/* <div style = {{display:'flex', justifyContent:'center',alignItems:'center',height: '100vh'}}>
      <Button onClick={handleClick}> Aplastame </Button>
      </div> */}

      {
        !user.length > 0 
        ? <FormularioLogin setUser={setUser} />
        : <Home user={user}n setUser={setUser} />

      }
    {/* <FormularioLogin setUser={setUser} />  
    <Home /> */}
    </>
    
  )
}
