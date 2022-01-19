import React from 'react';

const EmergencyAlertPanel = () => {
  return (
    <div className="container">
      <h3>Emergency</h3>
      <button className="emergency" onClick={() => alert('Triggered Emergency Alert!!!')}>Broadcast Emergency Alert</button>
    </div>
  );
};

export default EmergencyAlertPanel;