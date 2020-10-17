//import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


function App() {
  const data = [
    {
      name: '2020-09-15', first: 35, progress: 0, amt: 0,
    },
    {
      name: '2020-09-18', first: 35, progress: -30, amt: 0,
    },
    {
      name: '2020-09-19', first: 35, progress: -20, amt: 0,
    },
    {
      name: '2020-09-21', first: 35, progress: -20, amt: 0,
    },
    {
      name: '2020-09-22', first: 35, progress: -10, amt: 0,
    },
    {
      name: '2020-09-23', first: 35, progress: -30, amt: 0,
    },
    {
      name: '2020-09-25', first: 35, progress: 0, amt: 0,
    },
    {
      name: '2020-10-15', first: 35, progress: -35, amt: 0,
    },
    {
      name: '2020-10-15', first: 35, progress: -25, amt: 0,
    },
  ];

  //const [stats, setStats] = useState({ 
    //'Vacancies per date': [
        //['2020-09-15', 35],
        //['2020-09-18', 5],
        //['2020-09-19', 15],
        //['2020-09-21', 15],
        //['2020-09-22', 25],
        //['2020-09-23', 5],
        //['2020-09-25', 35],
        //['2020-10-15', 0],
        //['2020-10-25', 10],
    //]})
  
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
      <Profile />
      

    </div>
  );
}

export default App;
