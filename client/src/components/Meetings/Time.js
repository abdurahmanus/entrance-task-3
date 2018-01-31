import React from 'react';
import styled from 'styled-components';

import { calcPosition } from './calcPosition';

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

const Time = ({ className }) => (
  <div className={className}>
    {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((h, index) => (
        <Label key={index} style={{left: calcPosition(h, 0) + "%"}}>{h}</Label>
    ))}
  </div>
);

export default styled(Time)`
  flex-grow: 1;
  background: #fff;
  position: relative;
  overflow: hidden;
`;
