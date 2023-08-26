import React from 'react';
import './Tooltip.css';

// components
const Tooltip = ({ showTooltip }) => {
  return (
    showTooltip && (
      <div className="tooltip">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore alias
        debitis impedit? Libero pariatur nulla facere, maxime ab est, assumenda,
        cumque dolor voluptates asperiores enim ipsam corporis laboriosam nobis
        fuga.
      </div>
    )
  );
};

export default Tooltip;
