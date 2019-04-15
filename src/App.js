import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compotents/Header/Header';
import Navbar from './compotents/Navbar/Navbar';
import Profile from './compotents/Profile/Profile';

const App = () => {
    return (
        <div className="app-wrapper"> 
            <Header/>
            <Navbar/>
            <Profile/>            
        </div>
    );
}

export default App;
