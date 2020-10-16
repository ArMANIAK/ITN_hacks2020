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
  
    return (
        <div className="profile">
            <nav className="profile-tab">
                <ul>
                    <li><a href="#" title="link to tab">Profile Statistics</a></li>
                    <li className="active-tab"><a href="#" title="link to tab">General Statistics</a></li>
                    <li><a href="#" title="link to tab">Comparative Statistics</a></li>
                    <li><a href="#" title="link to tab">Company Statistics</a></li>
                </ul>
            </nav>
            <div className="profile-tab">
                <nav className="profile-tab-nav">
                    <ul>
                        <li className="active"><button onClick = {() => setStats(vacancies)}>Vacancies per Day</button></li>
                        <li className="active"><button onClick = {() => setStats(geography)}>Vacancies Geography</button></li>
                        <li className="active"><button onClick = {() => setStats(averageSalary)}>Average Salary</button></li>
                    </ul>
                </nav>
                <Statistics stats={stats}/>
            </div>
            <Tester />
        </div>
    )
}

export default Profile;