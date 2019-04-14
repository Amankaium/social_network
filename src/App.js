import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'

const App = () => {
    return (
        <div> parent div
            <Header />
            <div>first div</div>
            <div className="App">
                second one
                <ul>
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                </ul>
            </div>
            <Frog />
        </div>
    );
}

const Frog = () => {
    return (
        <div> FROOOG! </div>
    )
}

export default App;
