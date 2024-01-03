import React from 'react';
import TopNav from './TopNav';
import './App.css';
import './TopNav.css';
import './SideNav.css';
import SideNav from './SideNav';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <SideNav/>
    </div>
  );
}

export default App;
