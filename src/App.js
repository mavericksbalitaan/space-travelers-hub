import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/missions/Missions';
import Myprofile from './components/myprofile/Myprofile';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
