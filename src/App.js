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
        <Route path='/about' component={about} />
        <Route path='/contact' component={contact} />
      </Switch>

      <h1>This is app.js</h1>
    </div>
  );
}

export default App;
