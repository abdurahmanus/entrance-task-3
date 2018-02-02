import React from 'react';
import styled from 'styled-components';
import Room from './Room';

const FloorName = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  line-height: 13px;
  color: #858e98;
  padding-left: 25px;
  box-sizing: border-box;
  margin-bottom: 4px;
`;

const Floor = ({ className, data, dayTimeStart, dayTimeEnd }) => (
  <div className={className}>
    <FloorName>{data.floor} этаж</FloorName>
    {data.rooms.map(room => (
      <Room key={room.id} data={room} dayTimeStart={dayTimeStart} dayTimeEnd={dayTimeEnd} />
    ))}
  </div>
);

export default styled(Floor)`
  margin-top: 21px;
  margin-bottom: 3px;
`;
