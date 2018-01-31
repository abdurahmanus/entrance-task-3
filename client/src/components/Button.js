import React from 'react';
import styled from 'styled-components';

const Button = ({ className, children, onClick }) => (
  <button className={className} onClick={onClick}>{children}</button>
);

export default styled(Button)`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background: #007dff;
  color: #fff;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
  cursor: pointer;
  &:hover {
    background: #0059ff;
  }
  &:active {
    background-color: #0011fe;
  }
`;
