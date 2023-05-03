import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
      <>
        <div>
          <div className="navbar">
            <div className="navbar-title">
                <Link to="/">EI - Fr0nt 3nd</Link>
            </div>
            <div className="navbar-content">
                <Link to="/tickets">Gérer les tickets</Link>
                <Link to="/create">Créer un ticket</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Navbar