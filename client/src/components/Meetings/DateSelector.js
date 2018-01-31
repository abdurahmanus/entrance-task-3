import React from 'react';
import styled from 'styled-components';
import RoundButton from '../RoundButton';
import leftSvg from '../arrow-left.svg';
import rightSvg from '../arrow-right.svg';

const CurrentDate = styled.div`
  flex-grow: 1;
  text-align: center;
  font-weight: bold;
`;

const DateSelector = ({ className }) => (
  <div className={className}>
    <RoundButton>
      <img src={leftSvg} alt="Prev Date" />
    </RoundButton>
    <CurrentDate>14 дек · Сегодня</CurrentDate>
    <RoundButton>
      <img src={rightSvg} alt="Next Date" />
    </RoundButton>
  </div>
);

export default DateSelector;
