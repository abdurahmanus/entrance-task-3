import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Meetings from './components/Meetings';

const headerHeight = "71px";

const AppHeader = styled(Header)`
  height: ${headerHeight};
`;

const AppMeetings = styled(Meetings)`
  height: calc(100vh - ${headerHeight});
`;

const App = ({ className }) => (
  <div className={className}>
    <AppHeader />
    <AppMeetings />
  </div>
);

export default App;
