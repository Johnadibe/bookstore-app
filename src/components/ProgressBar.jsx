import React, { useState, useEffect } from 'react';
import Prototypes from 'prop-types';
import '../styles/ProgressBar.css';

const ProgressBar = (props) => {
  const [count, setCount] = useState(0);
  const [intervalid, setIntervalId] = useState(null);
  const [leftRotationValue, setLeftRotationValue] = useState(0);
  const [rightRotationValue, setRightRotationValue] = useState(0);
  const { limit } = props;

  if (count === limit) {
    clearInterval(intervalid);
  }

  const leftRotation = {
    transform: `rotate(${leftRotationValue}deg)`,
    transition: 'all 0.2s ease-in',
  };

  const rightRotation = {
    transform: `rotate(${rightRotationValue}deg)`,
    transition: 'all 0.2s ease-in',
  };

  useEffect(() => {
    let innerCount = 0;
    const id = setInterval(() => {
      setCount((count) => count + 1);
      innerCount += 1;
      if (innerCount <= 50) {
        setLeftRotationValue((leftRotationValue) => leftRotationValue + 3.6);
      } else {
        setRightRotationValue((rightRotationValue) => rightRotationValue + 3.6);
      }
    }, 20);
    setIntervalId(id);
  }, []);

  return (
    <div className="progress-bar">
      <div className="circular">
        <div className="inner" />
        <div className="circle">
          <div className="bar left">
            <div className="progress" style={leftRotation} />
          </div>
          <div className="bar right">
            <div className="progress" style={rightRotation} />
          </div>
        </div>
      </div>
      <div className="percentage">
        <p className="percent-number">
          {limit}
          %
        </p>
        <p className="completed">Completed</p>
      </div>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  limit: Prototypes.number.isRequired,
};
