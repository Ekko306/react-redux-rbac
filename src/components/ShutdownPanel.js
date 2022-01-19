import React from 'react';

const ShutdownPanel = () => {
  return (
    <div className="container">
      <h3>Reactor</h3>
        <button className="shotdown" onClick={() => alert('Reactors shutting down...')}>Shutdown Reactor</button>
    </div>
  );
};

export default ShutdownPanel;