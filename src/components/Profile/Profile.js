import React, { useState, PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import './Profile.css';
import Statistics from '../Statistics/Statistics';
import Tester from '../Tester/Tester';

const Profile = () => {

    const [stats, setStats] = useState({ 
        caption: 'Vacancies per date',
        data: [
            { axisX: '2020-09-15', axisY: 35 },
            { axisX: '2020-09-18', axisY: 5 },
            { axisX: '2020-09-19', axisY: 15 },
            { axisX: '2020-09-21', axisY: 15 },
            { axisX: '2020-09-22', axisY: 25 },
            { axisX: '2020-09-23', axisY: 5 },
            { axisX: '2020-09-25', axisY: 35 },
            { axisX: '2020-10-15', axisY: 0 },
            { axisX: '2020-10-25', axisY: 10 },
        ]})

  // stats is a mock-up for real data which is fetched from API or DB and might be initialized within backend code

  const vacancies = { 
        caption: 'Vacancies per date',
        data: [
            { axisX: '2020-09-15', axisY: 35 },
            { axisX: '2020-09-18', axisY: 5 },
            { axisX: '2020-09-19', axisY: 15 },
            { axisX: '2020-09-21', axisY: 15 },
            { axisX: '2020-09-22', axisY: 25 },
            { axisX: '2020-09-23', axisY: 5 },
            { axisX: '2020-09-25', axisY: 35 },
            { axisX: '2020-10-15', axisY: 0 },
            { axisX: '2020-10-25', axisY: 10 },
        ]};

    const geography = {
        caption: 'Geography',
        data: [
            { axisX: 'Lutsk', axisY: 10 },
            { axisX: 'Dnipro', axisY: 35 },
            { axisX: 'Lviv', axisY: 44 },
            { axisX: 'Kyiv', axisY: 54 },
            { axisX: 'Kharkiv', axisY: 30 },
            { axisX: 'Chernihiv', axisY: 15 },
            { axisX: 'Zaporizhzhia', axisY: 11 },
        ]};

    const averageSalary = {
        caption: 'Average Salary',
        data: [
            {axisX: '2020-01', axisY: 15000 },
            {axisX: '2020-02', axisY: 14200 },
            {axisX: '2020-03', axisY: 12000 },
            {axisX: '2020-04', axisY: 13000 },
            {axisX: '2020-05', axisY: 14000 },
            {axisX: '2020-06', axisY: 15000 },
            {axisX: '2020-07', axisY: 15000 },
            {axisX: '2020-08', axisY: 17000 },
            {axisX: '2020-09', axisY: 19000 },
        ]};

    const activeUsers = {
        caption: 'Active Users',
        data: [
            { axisX: '2020-09-15', axisY: 25 },
            { axisX: '2020-09-18', axisY: 17 },
            { axisX: '2020-09-19', axisY: 23 },
            { axisX: '2020-09-21', axisY: 20 },
            { axisX: '2020-09-22', axisY: 8 },
            { axisX: '2020-09-23', axisY: 22 },
            { axisX: '2020-09-25', axisY: 24 },
            { axisX: '2020-10-15', axisY: 15 },
            { axisX: '2020-10-25', axisY: 27 },
        ]
    }
  
    return (
        <div className="profile">
            <section className="section">
                <h2 className="section-title">Аналітика</h2>
                <nav class="section-nav">
                    <ul>
                        <li class="section-nav-text">Платформа</li>
                        <li class="section-nav-text">Профіль</li>
                        <li class="section-nav-text">Компания</li>
                    </ul>
                    
                </nav>
                <main class="container">
                    <nav class="aside">
                        <ul class="aside-ul">
                            <li class="aside-li">
                                <button class="aside-li-text" onClick = {() => setStats(vacancies)}>Нових вакансій</button>
                            </li>
                            <li class="aside-li">
                                <button class="aside-li-text" onClick = {() => setStats(geography)}>Географія вакансій</button>
                            </li>
                            <li class="aside-li">
                                <button class="aside-li-text" onClick = {() => setStats(averageSalary)}>Средня заробітна плата</button>
                            </li>
                            <li class="aside-li">
                                <button class="aside-li-text" onClick = {() => setStats(activeUsers)}>Активних користувачів</button>
                            </li>
                        </ul>
                    </nav>

                    <main class="section">
                        <nav class="section-nav">
                            <ul class="nav-profile">
                                <li class="nav-profile-item">День</li>
                                <li class="nav-profile-item">Тиждень</li>
                                <li class="nav-profile-item">Місяць</li>
                                <li class="nav-profile-item">Рік</li>
                            </ul>
                            <input type="text" name="text" id="text" placeholder="Введіть міста через кому" disabled/>
                            <input type="date" name="date" id="date"/>
                        </nav>
                        <div class="graphic">
                        <ResponsiveContainer>
                            <AreaChart
                                data={stats}
                                margin={{
                                top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="data.axisX" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="data.axiY" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                        </div>
                    </main>
                </main>
            </section>

            <Tester />
        </div>
    )
}

export default Profile;