import React from 'react';

const EmergencyAlertPanel = () => {
  return (
    <div className="container">
      <h3>紧急情况</h3>
      <button className="emergency" onClick={() => alert('触发紧急情况!!!')}>广播紧急情况</button>
    </div>
  );
};

export default EmergencyAlertPanel;