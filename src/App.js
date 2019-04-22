import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './compotents/Header/Header';
import Navbar from './compotents/Navbar/Navbar';
import Profile from './compotents/Profile/Profile';
import Messages from './compotents/Messages/Messages';

const App = (props) => {
    return (
        <div className="app-wrapper"> 
            <Header/>
            <Navbar users={props.store.getState().messages.dialogs}/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                    render={() => <Profile
                        posts={props.store.getState().posts}
                        dispatch={props.store.dispatch.bind(props.store)}  
                    />} />
                <Route path='/messages'
                    render={() => <Messages
                        messages={props.store.getState().messages}
                        dispatch={props.store.dispatch.bind(props.store)}    
                    />}/>

                {/* <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/> */}
                
            </div>                                    
        </div>
    );
}

export default App;
