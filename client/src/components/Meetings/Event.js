import React from 'react';
import styled from 'styled-components';

const Event = ({ className, dateStart, dateEnd }) => (
  <div className={className} />
);

export default styled(Event)`
  background: rgba(213, 223, 233, 1);
  cursor: pointer;
  width: 100%;
  height: 100%;
`;
