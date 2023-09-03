import './App.css'
import { Routes , Route  } from 'react-router-dom'
import Home from './pages/Home'
import Abouts from './pages/Abouts'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/Mada-Blog/' element={<Home />} />
        <Route path='/Mada-Blog/abouts' element={<Abouts />} />
        <Route path='/Mada-Blog/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
