import React from 'react'
import { Button } from 'react-bootstrap';

export const Home = ({ user,setUser }) => {
    const handleLogOut = () => {
        setUser([]);
    }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Bienvenido</h1>
        <h2 style={{textAlign:'center'}}>{user}</h2>
        <Button type='submit' onClick={handleLogOut}>Cerrar Sesion</Button>
    </div>
  )
}
