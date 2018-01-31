import React from 'react';
import styled from 'styled-components';
import { TimeLineHeight } from './constants';
import Floor from './Floor';

const Body = ({ className, floors }) => (
  <div className={className}>{floors.map(floor => <Floor key={floor.floor} data={floor} />)}</div>
);

export default styled(Body)`
  position: absolute;
  top: ${TimeLineHeight};
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 101;
`;
