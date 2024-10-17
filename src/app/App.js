import '../styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <>
      <Router>
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
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
