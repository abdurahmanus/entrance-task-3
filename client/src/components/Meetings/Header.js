import React from 'react';
import styled from 'styled-components';

import { HeaderHeight, SideWidth } from './constants';
import DateSelector from './DateSelector';
import TimeLine from './TimeLine';

const HeaderDate = styled(DateSelector)`
  width: ${SideWidth};
  height: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;

const Header = ({ className, dayTimeStart, dayTimeEnd }) => (
  <header className={className}>
    <HeaderDate />
    <TimeLine dayTimeStart={dayTimeStart} dayTimeEnd={dayTimeEnd} />
  </header>
);

export default styled(Header)`
  display: flex;
  height: ${HeaderHeight};
  background: #fff;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
`;
