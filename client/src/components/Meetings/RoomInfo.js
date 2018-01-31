import React from 'react';
import styled from 'styled-components';
import { SideWidth } from './constants';

const RoomInfoName = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 17px;
  margin-top: 4px;
`;

const RoomInfoCapacity = styled.div`
  font-size: 13px;
  line-height: 17px;
  margin-bottom: 4px;
`;

const RoomInfo = ({ className, title, capacity }) => (
  <div className={className}>
    <RoomInfoName>{title}</RoomInfoName>
    <RoomInfoCapacity>до {capacity} человек</RoomInfoCapacity>
  </div>
);

export default styled(RoomInfo)`
  width: ${SideWidth};
  padding-left: 25px;
  box-sizing: border-box;
  color: #000;
`;
