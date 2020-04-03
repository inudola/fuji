import React from 'react';
import ReactDOM from 'react-dom';
import UserManagement from './UserManagement';
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<UserManagement />);
});
