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
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
