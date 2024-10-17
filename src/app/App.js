import '../styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Content from '../pages/Content.js'; 

function App() {
  return (
    <Router>
      <div className="app-container"> {/* New container for flexbox */}
        <Header />
        <div className='page-container'>
          <Routes>
            {routes.map((route, index) => (
              <Route 
                key={index} 
                path={route.path} 
                element={route.element} 
              />
            ))}
            <Route path="/" element={<Content />} /> {/* Add route for Content component */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
