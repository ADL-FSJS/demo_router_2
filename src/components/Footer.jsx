import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navegar = useNavigate();
    function goHome() {
        navegar('/');
    }
  return (
    <Fragment>
        <h2>Footer</h2>
        <button onClick={goHome}>Volver al Inicio</button>
    </Fragment>
    
  )
}
