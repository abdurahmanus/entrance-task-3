import React from 'react';
import styled from 'styled-components';
import RoomInfo from './RoomInfo';
import RoomEvents from './RoomEvents';

const Room = ({ className, data }) => (
  <div className={className}>
    <RoomInfo title={data.title} capacity={data.capacity}/>
    <RoomEvents events={ data.events }/>
  </div>
);

export default styled(Room)`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;