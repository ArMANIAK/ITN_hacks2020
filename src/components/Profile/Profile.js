import React from 'react';
import './Profile.css';
import Statistics from '../Statistics/Statistics';
import Tester from '../Tester/Tester';

const Profile = () => {

  // stats is a mock-up for real data which is fetched from API or DB and might be initialized within backend code

  const stats = { 
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
        ],
        'Geography': [
            ['Lutsk', 10],
            ['Dnipro', 35],
            ['Lviv', 44],
            ['Kyiv', 54],
            ['Kharkiv', 30],
            ['Chernihiv', 15],
            ['Zaporizhzhia', 11],
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
                        <li className="active"><a href="#" title="link to API">Vacancies per Day</a></li>
                        <li className="active"><a href="#" title="link to API">Vacancies Geography</a></li>
                        <li className="active"><a href="#" title="link to API">Average Salary</a></li>
                    </ul>
                </nav>
                <Statistics stats={stats}/>
            </div>
            <Tester />
        </div>
    )
}

export default Profile;