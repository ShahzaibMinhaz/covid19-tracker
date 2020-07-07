import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import GlobaldataCards from './Components/GlobalDataCards'
import {CountrySelect} from './Components/CountrySelect';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className='center'>
          <Switch>
            <Route path="/" exact component={GlobaldataCards} />
            <Route path="/Countrydata" component={CountrySelect} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
