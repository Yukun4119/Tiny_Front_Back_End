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
            <Homepage id="1"/>
          }/>
          <Route path='/page2' exact render = {() => 
            <Page2 id="12"/>
          }/>
           <Route path='/page2/page3' exact render = {() => 
            <Page3 id="123"/>
          }/>
           <Route path='/page2/page3/answer' exact render = {() => 
            <Answer id="3"/>
          }/>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
