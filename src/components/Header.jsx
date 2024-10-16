import React from 'react'
import '../styles/Header.css';

const Header = () => {
  return (
    <>
        <div className="header">
            <h1>A Survey on the QUIC Protocol</h1>
            <div className="hamburger-menu">
                {/* hamburger menu */}
            </div>
        </div>
        <div class ="navbar" id="navbar">
            <ul>
                <li><a href="/">Overview</a></li>
                <li><a href="/">Content</a></li>
                <li><a href="/">Taxonomy</a></li>
                <li><a href="/">Resources</a></li>
                <li><a href="/">Team</a></li>
            </ul>
        </div>
    </>
  )
}

export default Header