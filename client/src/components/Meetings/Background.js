import React from 'react';
import styled from 'styled-components';
import { TimeLineHeight, SideWidth } from './constants';

const Background = styled.div`
  position: absolute;
  top: ${TimeLineHeight};
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  box-shadow: 0 -1px 0 0 #e9ecef;
  z-index: 100;
`;

const BackgroundLeft = styled.div`
  background: #fff;
  width: ${SideWidth};
  box-shadow: inset -1px 0 0 0 #e9ecef;
`;

const BackgroundRight = styled.div`
  background: #f6f7f9;
  flex-grow: 1;
`;

export default () => (
  <Background>
    <BackgroundLeft />
    <BackgroundRight />
  </Background>
);
