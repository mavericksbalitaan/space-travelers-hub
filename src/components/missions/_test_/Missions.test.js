import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';
import store from '../../../redux/configureStore';
import Missions from '../Missions';
import Missioncard from '../Missioncard';

// missions snapshots
const MockMissions = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

it('matches snapshot', () => {
  const tree = renderer.create(
    <MockMissions />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// test missions link from the app section
const MockApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

describe('when you click the missions link', () => {
  it('should render missions page content', () => {
    render(
      (<MockApp />),
    );
    userEvent.click(screen.getByRole('link', { name: /missions/i }));
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});

// check button change text
describe('when you click button it should change to leave mission', () => {
  it('should render missions page content', () => {
    render(
      (<MockMissioncard />),
    );
    userEvent.click(screen.getByRole('button', { name: /leave mission/i }));
    expect(screen.getByText(/Active Member/)).toBeInTheDocument();
  });
});

// test the mission card
const missioncard = [
  {
    missionid: '9D1B7E0',
    missionName: 'Thaicom',
    missionDesc:
    'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    missionweblink: 'https://en.wikipedia.org/wiki/Thaicom',
    missionjoin: true,
  }];

const MockMissioncard = () => (
  <Provider store={store}>
    <Missioncard missioncard={missioncard} />
  </Provider>
);

test('renders data in the card as from API', () => {
  const tree = renderer.create(<MockMissioncard />).toJSON();
  expect(tree).toMatchSnapshot();
});
