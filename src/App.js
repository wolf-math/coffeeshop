import React from 'react';
import { Switch, Route } from 'react-router-dom';

import about from './pages/about/about.page';
import Contact from './pages/contact/contact.page';
import homepage from './pages/homepage/homepage.page';
import drinks from './pages/drinks/drinks.page';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import CreatePost from './pages/admin/CreatePost.page';
import menu from './pages/menu/menu.page';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <Switch>
          <Route exact path='/' component={homepage} />
          <Route path='/about' component={about} />
          <Route path='/contact' component={Contact} />
          <Route path='/drinks' component={drinks} />
          <Route path='/menu' component={menu} />
          <Route path='/create' component={CreatePost} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
