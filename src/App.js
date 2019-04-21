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
                <Navbar users={props.store.getState().messages.dialogs}/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                        render={() => <Profile
                            posts={props.store.getState().posts}
                            addPost={props.store.addPost.bind(props.store)}
                            postChange={props.store.postChange.bind(props.store)}    
                        />} />
                    <Route path='/messages'
                        render={() => <Messages
                            messages={props.store.getState().messages}/>}/>

                    {/* <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/> */}
                    
                </div>                                    
            </div>
        </BrowserRouter>
    );
}

export default App;
