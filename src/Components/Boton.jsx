import React from 'react';
import { Button,Navbar,Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

export const Boton = () => {
    const handleClick = () =>{
        alert('Botón clickeado')
    }
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

    <div className="d-flex justify-content-center align-items-center">
      <Button onClick={handleClick}> Aplastame </Button>
      </div>
    </>
  )
}
