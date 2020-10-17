import React, {useState} from 'react';
import './Profile.css';
import Statistics from '../Statistics/Statistics';
import Tester from '../Tester/Tester';

const Profile = () => {

    const [stats, setStats] = useState({ 
        'Vacancies per date': [
            ['2020-09-15', 35],
            ['2020-09-18', 5],
            ['2020-09-19', 15],
            ['2020-09-21', 15],
            ['2020-09-22', 25],
            ['2020-09-23', 5],
            ['2020-09-25', 35],
            ['2020-10-15', 0],
            ['2020-10-25', 10],
        ]})

  // stats is a mock-up for real data which is fetched from API or DB and might be initialized within backend code

  const vacancies = { 
        'Vacancies per date': [
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

    const geography = {
        'Geography': [
            ['Lutsk', 10],
            ['Dnipro', 35],
            ['Lviv', 44],
            ['Kyiv', 54],
            ['Kharkiv', 30],
            ['Chernihiv', 15],
            ['Zaporizhzhia', 11],
        ]};

    const averageSalary = {
        'Average Salary': [
            ['2020-01', 15000],
            ['2020-02', 14200],
            ['2020-03', 12000],
            ['2020-04', 13000],
            ['2020-05', 14000],
            ['2020-06', 15000],
            ['2020-07', 15000],
            ['2020-08', 17000],
            ['2020-09', 19000],
        ]};

    const activeUsers = {
        'Active Users': [
            ['2020-09-15', 25],
            ['2020-09-18', 17],
            ['2020-09-19', 23],
            ['2020-09-21', 20],
            ['2020-09-22', 8],
            ['2020-09-23', 22],
            ['2020-09-25', 24],
            ['2020-10-15', 15],
            ['2020-10-25', 27],
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
                            <Statistics stats={stats}/>
                        </div>
                    </main>
                </main>
            </section>

            <Tester />
        </div>
    )
}

export default Profile;