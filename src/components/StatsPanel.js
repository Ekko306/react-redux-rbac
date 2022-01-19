import React from 'react';

const StatsPanel = () => {
  return (
    <div className="container">
      <h3>Stats</h3>

        <div className="stats__item">
          <h4>Indoor Radiation Levels</h4>
          <p className="stats__badge">0.3 μSv/hour</p>
        </div>

        <div className="stats__item">
          <h4>Outdoor Radiation Levels</h4>
          <p className="stats__badge">0.09 μSv/hour</p>
        </div>

        <div className="stats__item">
          <h4>Active Cores</h4>
          <p className="stats__badge">3</p>
        </div>

        <div className="stats__item">
          <h4>Meltdown Imminent</h4>
          <p className="stats__badge">No</p>
        </div>

        <div className="stats__item">
          <h4>Avg Spent Fuel Rod Age</h4>
          <p className="stats__badge">8.4 years</p>
        </div>

    </div>
  );
};

export default StatsPanel;