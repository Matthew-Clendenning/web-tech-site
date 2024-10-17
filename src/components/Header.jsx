import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <>
        <div className="header">
            <h1>A Survey on the QUIC Protocol</h1>
            <div className="hamburger-menu">
                {/* hamburger menu */}
            </div>
            <div class ="navbar" id="navbar">
                <ul>
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/content">Content</Link></li>
                    <li><Link to="/taxonomy">Taxonomy</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header