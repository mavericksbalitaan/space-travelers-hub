import React from 'react';
import { useSelector } from 'react-redux';
import '../stylesheets/Myprofile.css';

function Myprofile() {
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  return (
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        {rockets && rockets.map((el) => (<li key={el.rocketId}>{el.rocketName}</li>))}
      </div>
    </section>
  );
}

export default Myprofile;
