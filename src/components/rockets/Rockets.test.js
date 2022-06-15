import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from './Rockets';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

const MockRockets = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

test('renders correctly', () => {
  const tree = renderer.create(<MockRockets />).toJSON();
  expect(tree).toMatchSnapshot();
});
