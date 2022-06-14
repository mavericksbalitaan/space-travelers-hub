import React from 'react';
import '../stylesheets/RocketsCards.css';
import PropTypes from 'prop-types';

function RocketsCards({ rocket }) {
  const {
    rocketName, rocketDesc, rocketImg,
  } = rocket;

  const clickHandler = () => {
    console.log('test');
  };

  return (
    <section className="rocketCard">
      <img className="rocketImg" src={rocketImg} alt="" srcSet="" />
      <div className="rocketDesc">
        <h1 className="titleDesc">{rocketName}</h1>
        <p className="paraDesc">{rocketDesc}</p>
        <button className="reserveBtn" type="button" onClick={clickHandler}>Reserve Rocket</button>
      </div>
    </section>
  );
}

RocketsCards.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string,
    rocketDesc: PropTypes.string,
    rocketImg: PropTypes.string,
  }).isRequired,
};

export default RocketsCards;
