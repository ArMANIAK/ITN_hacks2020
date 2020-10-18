import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Tester from './components/Tester/Tester';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <a className="logo" href="https://bazait.com" title="BazaIT"><img src={ require("./assets/BazaIT.svg") } alt="BazaIT logo"/></a>
          <nav>
            <ul>
              <li>Компанії</li>
              <li className="active">Вакансії</li>
              <li>Новини</li>
            </ul>
          </nav>
          <button><span></span>UserName</button>
        </div>
      </header>
      <Profile />
      <Tester />
    </div>
  );
}

export default App;
