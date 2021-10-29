import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
import Homepage from "./pages/home"
import Page2 from './pages/page2'
import Answer from './pages/answer'
import Page3 from './pages/page3'
import { Button } from 'antd';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Route path='/' exact render = {() => 
            <Homepage />
          }/>
          <Route path='/page2/:id' exact render = {() => 
            <Page2/>
          }/>
           <Route path='/page3/:id' exact render = {() => 
            <Page3/>
          }/>
           <Route path='/answer/:id' exact render = {() => 
            <Answer />
          }/>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
