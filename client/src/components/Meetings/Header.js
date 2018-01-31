import React from 'react';
import styled from 'styled-components';

import { TimeLineHeight } from './constants';
import DateSelector from './DateSelector';
import Time from './Time';

const TimeLineDate = styled(DateSelector)`
  width: 245px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const TimeLine = ({ className }) => (
  <div className={className}>
    <TimeLineDate />
    <Time />
  </div>
);

export default styled(TimeLine)`
  height: ${TimeLineHeight};
  background: #fff;
  box-shadow: 0 -1px 0 0 #e9ecef;
  display: flex;
`;
