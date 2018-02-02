import React from 'react';
import styled from 'styled-components';
import { createFromDate, percentFromStart, percentFromEnd } from './timeUtils';

const Event = ({ className, dateStart, dateEnd, dayTimeStart, dayTimeEnd }) => (
  <div
    className={className}
    style={{
      left:
        percentFromStart(dayTimeStart, dayTimeEnd, createFromDate(dateStart)) +
        '%',
      right:
        percentFromEnd(dayTimeStart, dayTimeEnd, createFromDate(dateEnd)) + `%`
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
