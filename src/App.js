import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conpotents/Header';
import Navbar from './conpotents/Navbar';
import Profile from './conpotents/Profile';

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
