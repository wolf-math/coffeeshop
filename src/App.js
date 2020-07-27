import React from 'react';
import { Switch, Route } from 'react-router-dom';

import about from './pages/about/about.page';
import contact from './pages/contact/contact.page';
import homepage from './pages/homepage/homepage.page';
import drinks from './pages/drinks/drinks.page';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={homepage} />
        <Route path='/about' component={about} />
        <Route path='/contact' component={contact} />
        <Route path='/drinks' component={drinks} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
