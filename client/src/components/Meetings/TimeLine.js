import React from 'react';
import styled from 'styled-components';
import { makeHoursArray, percentFromStart } from './timeUtils';

const Label = styled.span`
  position: absolute;
  width: 49px;
  line-height: 13px;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  margin-left: -24px;
  top: 17px;
`;

const TimeLine = ({ className, dayTimeStart, dayTimeEnd }) => (
  <div className={className}>
    {makeHoursArray(dayTimeStart, dayTimeEnd).map((h, index) => (
      <Label
        key={index}
        style={{ left: percentFromStart(dayTimeStart, dayTimeEnd, h) + '%' }}
      >
        {h.getHours()}
      </Label>
    ))}
  </div>
);

export default styled(TimeLine)`
  flex-grow: 1;
  background: #fff;
  position: relative;
  overflow: hidden;
`;
