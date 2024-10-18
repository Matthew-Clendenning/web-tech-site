import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <h1>A Survey on the QUIC Protocol</h1>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <span className="hamburger-icon">&#9776;</span>
        </div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Overview</Link></li>
            <li><Link to="/content" onClick={toggleSidebar}>Content</Link></li>
            <li><Link to="/taxonomy" onClick={toggleSidebar}>Taxonomy</Link></li>
            <li><Link to="/team" onClick={toggleSidebar}>Team</Link></li>
            <li><Link to="/resources" onClick={toggleSidebar}>Resources</Link></li>
          </ul>
        </div>
        <div className="navbar" id="navbar">
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
  );
};

export default Header;
