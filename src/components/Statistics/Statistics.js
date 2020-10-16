import React from 'react';
import Graphic from './Graphic';
import './Statistics.css';

const Statistics = ( {stats} ) => {
    const graphicTitles = Object.keys(stats);

    // this is a little more complex solution than it could be but it allows to show few graphics for a single user

    let graphics = graphicTitles.map((el, key) => <Graphic key={key} title={el} stats={stats[el]} />);
    return (
        <div className="statistics">
            { graphics }
        </div>
    )
}

export default Statistics;