import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../../redux/missions/MissionsSlice';
import Missioncard from './Missioncard';
import '../stylesheets/Missioncard.css';

const Missionlist = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissionsApi());
  }, []);
  return (
    <div>
      <div className="heading">
        <div className="left">Mission</div>
        <div className="center">Description</div>
        <div className="right">Status</div>
      </div>
      { mission.map((item) => (
        <Missioncard
          key={item.missionid}
          missionname={item.missionName}
          description={item.missionDesc}
          id={item.missionid}
          missionjoin={item.missionjoin}
        />
      )) }
    </div>
  );
};

export default Missionlist;
