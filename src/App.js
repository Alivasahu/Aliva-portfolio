import './App.scss';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Sidebar from './Sidebar/Sidebar';
import Skills from './Skills/Skills';
import Topbar from './Topbar/Topbar';
import { useState } from 'react';
function App() {
  const [sidebar,setSidebar]=useState(false)
  return (
    <div className="App">
    <Topbar sidebar={sidebar} setSidebar={setSidebar}/>
    <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
    <div className="section">
    <Home/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    </div>
   
  </div>
  );
}

export default App;
