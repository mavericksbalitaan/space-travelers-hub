import React from 'react';
import { useSelector } from 'react-redux';
import '../stylesheets/Myprofile.css';

function Myprofile() {
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  if (!rockets.length) {
    return (
      <section className="tableContainer">
        <div className="missions">
          <h1>My Missions</h1>
          <ul className="itemsList">
            <li>There are no missions joined.</li>
          </ul>
        </div>
        <div className="rockets">
          <h1>My Rockets</h1>
          <ul className="itemsList">
            <li>There are no rockets reserved.</li>
          </ul>
        </div>
      </section>
    );
  }
  return (
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
        <ul className="itemsList">
          {rockets && rockets.map((el) => (<li key={el.rocketId}>{el.rocketName}</li>))}
        </ul>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <ul className="itemsList">
          {rockets && rockets.map((el) => (<li key={el.rocketId}>{el.rocketName}</li>))}
        </ul>
      </div>
    </section>
  );
}

export default Myprofile;
