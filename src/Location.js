import React from 'react';
import './Location.css'

export const Location = (props) => {
    const { info } = props;
    return (
      <div className="Location">
        <div>
        <h3>{info.name}</h3>
        <p>{info.description}</p>
        <p>Rating: {info.rating}/5</p>
        </div>
        <div>
          <div className="img-placeholder"><strong>IMAGE</strong></div>
        </div>
      </div>
    );
  };