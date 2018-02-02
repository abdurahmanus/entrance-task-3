import React from 'react';
import styled from 'styled-components';
import { HeaderHeight } from './constants';
import Floor from './Floor';

const Body = ({ className, floors, dayTimeStart, dayTimeEnd }) => (
  <div className={className}>
    {floors.map(floor => (
      <Floor
        key={floor.floor}
        data={floor}
        dayTimeStart={dayTimeStart}
        dayTimeEnd={dayTimeEnd}
      />
    ))}
  </div>
);

export default styled(Body)`
  position: absolute;
  top: ${HeaderHeight};
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 101;
`;
