import React from 'react';
import './Card.css';

export const CommonCard = (props) => {
  return (
    <div className="CardWrapper">
      {props.children}
    </div>
  );
};
