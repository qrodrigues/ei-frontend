import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Tickets from './pages/tickets'
import Create from './pages/create'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tickets" element={<Tickets />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/tickets/:id" element={<Create />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
