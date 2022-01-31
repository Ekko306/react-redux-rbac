import React from 'react';

const StatsPanel = () => {
  return (
    <div className="container">
      <h3>仪表盘</h3>

        <div className="stats__item">
          <h4>室内辐射值</h4>
          <p className="stats__badge">0.3 μSv/hour</p>
        </div>

        <div className="stats__item">
          <h4>室外辐射值</h4>
          <p className="stats__badge">0.09 μSv/hour</p>
        </div>

        <div className="stats__item">
          <h4>激活核心数</h4>
          <p className="stats__badge">3</p>
        </div>

        <div className="stats__item">
          <h4>即将崩溃</h4>
          <p className="stats__badge">No</p>
        </div>

        <div className="stats__item">
          <h4>平均乏燃料棒年龄</h4>
          <p className="stats__badge">8.4 years</p>
        </div>

    </div>
  );
};

export default StatsPanel;