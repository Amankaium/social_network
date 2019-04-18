import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './compotents/Header/Header';
import Navbar from './compotents/Navbar/Navbar';
import Profile from './compotents/Profile/Profile';
import Messages from './compotents/Messages/Messages';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper"> 
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/* <Route path='/profile' component={Profile}/> */}
                    {/* <Route path='/messages' component={Messages}/> */}
                    <Route path='/profile' render={() => <Profile postData={props.postData}/>} />
                    <Route
                        path='/messages'
                        render={() => <Messages dialogData={props.dialogData} messageData={props.messageData}/>}/>

                    {/* <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/> */}
                    
                </div>                                    
            </div>
        </BrowserRouter>
    );
}

export default App;
