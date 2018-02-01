import React from 'react';
import styled from 'styled-components';
import {fromDate, percentFromStart, percentFromEnd} from './timeUtils';

const Event = ({ className, dateStart, dateEnd, startTime, endTime }) => (
  <div
    className={className}
    style={{
      left: percentFromStart(startTime, endTime, fromDate(dateStart)) + '%',
      right: percentFromEnd(startTime, endTime, fromDate(dateEnd)) + `%`
    }}
  />
);

export default styled(Event)`
  position: absolute;
  background: rgba(213, 223, 233, 1);
  border: none;
  top: 0;
  bottom: 0;
  cursor: pointer;
`;
