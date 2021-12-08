import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Blogs } from './pages/blog';
import Calc from './pages/calc';
import { SignUp } from './pages/signup';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blogs />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;