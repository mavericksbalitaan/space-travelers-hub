import React, { useEffect } from 'react';
import store from '../../redux/configureStore';
import '../stylesheets/Myprofile.css';

function Myprofile() {
  let rocketsData;
  useEffect(() => {
    const data = store.getState().rockets;
    rocketsData = data.filter((el) => el.rocketReserved === true);
  }, []);
  return (
    <section className="tableContainer">
      <div className="missions">
        <h1>My Missions</h1>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        {rocketsData && rocketsData.map((el) => (console.log(el)))}
      </div>
    </section>
  );
}

export default Myprofile;
