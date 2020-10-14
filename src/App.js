import React from 'react';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Tester from './components/Tester/Tester';

function App() {

  // stats is a mock-up for real data which is fetched from API or DB and might be initialized within backend code

  const stats = { 'Responces per date': [
    ['2020-09-15', 35],
    ['2020-09-18', 5],
    ['2020-09-19', 15],
    ['2020-09-21', 15],
    ['2020-09-22', 25],
    ['2020-09-23', 5],
    ['2020-09-25', 35],
    ['2020-10-15', 0],
    ['2020-10-25', 10],
  ]};

  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <a className="logo" href="https://bazait.com" title="BazaIT"><img src={ require("./assets/BazaIT.svg") } alt="BazaIT logo"/></a>
          <nav>
            <ul>
              <li>Компанії</li>
              <li>Вакансії</li>
              <li>Новини</li>
            </ul>
          </nav>
          <button><span></span>UserName</button>
        </div>
      </header>
      <Statistics stats={ stats } />
      <Tester />
    </div>
  );
}

export default App;
