import React from 'react';

const ShutdownPanel = () => {
  return (
    <div className="container">
      <h3>反应堆</h3>
        <button className="shotdown" onClick={() => alert('反应堆正在关闭...')}>关闭反应堆</button>
    </div>
  );
};

export default ShutdownPanel;