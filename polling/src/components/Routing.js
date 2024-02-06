import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './landing';
import Login from './Login';
import Signup from './signup';
import CreatePollPage from './Poll';
import PollApp from './Main';
class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/poll' element={<CreatePollPage/>}/>
                <Route path='/main' element={<PollApp/>}/>

                
            </Routes>
        </Router>
                
            </div>
        );
    }
}

export default Routing;