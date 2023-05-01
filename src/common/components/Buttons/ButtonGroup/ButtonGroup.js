import React from 'react';
import './ButtonGroup.css';

export const ButtonGroup = (props) => {
  return (
    <div className="ButtonGroupWrapper">
      {props.children}
    </div>
  );
};
