import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Guisos from './views/Guisos'
import Empanadas from './views/Empanadas'
import Tortas from './views/Tortas'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Torta from './views/Torta'
import Ravioles from './views/Ravioles'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/guisos" element={<Guisos />} />
        <Route path="/empanadas" element={<Empanadas />} />
        <Route path="/tortas" element={<Tortas />} />
        <Route path="/tortaDetalle/:tortita" element={<Torta />} />
        {/* Atentos a los nombres en la URL! */}
        <Route path="/ravioles" element={<Ravioles />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}
