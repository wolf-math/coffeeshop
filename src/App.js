import React from 'react';
import { Switch, Route } from 'react-router-dom';

import about from './pages/about/about.page';
import contact from './pages/contact/contact.page';
import homepage from './pages/homepage/homepage.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
            <Route exact path='/' component={homepage} />
            <Route path='/contact' component={contact} />
            <Route path='/about' component={about} />
          </Switch>
    </div>
  );
}

export default App;
