import React from 'react';
import './App.css';
import Common from './components/common/Common'
import Species from './components/species/Species';
import People from './components/people/People';
import {BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <Common />
      <Route path="/species" component={Species} />
      <Route path="/people" component={People} />
    </BrowserRouter>

  )
}





export default App;