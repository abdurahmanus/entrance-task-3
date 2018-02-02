import React from 'react';
import styled from 'styled-components';
import { createFromDate, percentFromStart, percentFromEnd } from './timeUtils';

const Event = ({ className, dateStart, dateEnd, dayInterval }) => (
  <div
    className={className}
    style={{
      left: percentFromStart(dayInterval, createFromDate(dateStart)) + '%',
      right: percentFromEnd(dayInterval, createFromDate(dateEnd)) + `%`
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
