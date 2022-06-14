import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../stylesheets/Myprofile.css';
import { cancelRocket } from '../../redux/rockets/RocketsSlice';

function Myprofile() {
  const rockets = useSelector((state) => state.rockets.filter((el) => el.rocketReserved === true));
  const dispatch = useDispatch();

  const cancelHandler = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

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
          <li>There are no missions joined.</li>
        </ul>
      </div>
      <div className="rockets">
        <h1>My Rockets</h1>
        <div className="itemsList">
          {rockets && rockets.map((el) => (
            <div className="listBox" key={el.rocketId}>
              <h2 className="listName">
                {el.rocketName}
              </h2>
              <button className="readMore" type="button">
                <a href={el.rocketWiki}>
                  Read More
                </a>
              </button>
              <button className="remBtn" type="button" id={el.rocketId} onClick={cancelHandler}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Myprofile;
