import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const listArr = [{
  name: 'name',
  avatar: 'avatar',
  inSession: true
}];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List listArr={listArr} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders expected list', () => {
  const tree = renderer
    .create(<List people={listArr} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
})
