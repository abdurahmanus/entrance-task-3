import React from 'react';
import styled from 'styled-components';
import { calcPosition, toPosition } from './calcPosition';

const Event = ({ className, from, to }) => (
  <div
    className={className}
    style={{
      left: calcPosition(from.getHours(), from.getMinutes()) + '%',
      right: toPosition(to.getHours(), to.getMinutes()) + `%`
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
