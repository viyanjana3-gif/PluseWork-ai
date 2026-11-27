import React from 'react';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Counter from './components/Counter';
import Userinput from './components/Userinput';
import './App.css';
import About from './components/About';
import Students from './components/Students';
import Settings from './components/Settings';
import {Routes, Route, Navigate} from 'react-router-dom';

const App = () => {
  return (
      <div className="app-container">
        <Navbar />

        <div className="app-layout">
          <Slidebar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/About" element={<About />} />
              <Route path="/Students" element={<Students />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              

            </Routes>

            {/* <div className="extra-components">
              <Counter />
              <Userinput /> 
            </div> */}
          </main>
        </div>

        <Footer />

        {/* <div className="login-section">
          <Login />
        </div> */}
      </div>
  );
};

export default App;