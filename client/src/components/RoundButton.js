import React from 'react';
import styled from 'styled-components';

const RoundButton = ({className, children }) => (
    <button className={className}>{children}</button>
)

export default styled(RoundButton)`
  background: rgba(233, 236, 239, 1);
  border: none;
  border-radius: 24px;
  width: 24px;
  height: 24px;
  color: rgba(0, 0, 0, 0.43);
  line-height: 24px;
  cursor: pointer;
`;
