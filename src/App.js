import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

const Header = () => {
    return (
        <div>
            <a href="#">Home </a>
            <a href="#">ToDo </a>
            <a href="#">Profile </a>
        </div>
    )
}

export default App;
