// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="list-container">
      <li className="wave-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave"
        />
        <p className="logo-name">Wave</p>
      </li>
      <li className="wave-logo">
        <Link to="/" className="logo-name">
          Home
        </Link>
        <Link to="/about" className="logo-name">
          About
        </Link>
        <Link to="/contact" className="logo-name">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
