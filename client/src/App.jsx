import React, { useState } from 'react';
import Intro from './Components/intro/Intro';
import Topbar from './Components/topbar/Topbar';
import Works from './Components/works/Works';
import Contact from './Components/contact/Contact';
import Menu from './Components/menu/Menu';
import './app.scss'
import About from './Components/about/About';
import Activities from './Components/activities/Activities';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Activities/>
      </div>
    </div>
  );
}

export default App;
