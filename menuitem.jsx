import React from 'react';

const MenuItem = ({ name, price }) => {
  return (
    <div className="single-menu">
      <div className="title-div justify-content-between d-flex">
        <h4>{name}</h4>
        <p className="price float-right">{price}</p>
      </div>
      <p>Usage of the Internet is becoming more common due to rapid advance.</p>								
    </div>
  );
};

export default MenuItem;
