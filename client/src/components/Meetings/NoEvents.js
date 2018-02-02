import React from 'react';
import styled from 'styled-components';

const AddEventButton = styled.button`
  width: 57px;
  height: 100%;
  border: none;
  border-radius: 2px;
  background: rgba(43, 80, 253, 1);
  position: absolute;
  z-index: 103; /*??*/
  cursor: pointer;
  color: white;
  font-weight: bold;
  display: none;
`;

const NoEvents = ({ className, interval, dayInterval }) => (
  <div className={className}>
    <AddEventButton>+</AddEventButton>
  </div>
);

export default styled(NoEvents)`
  background: #fff;
  width: 100%;
  height: 100%;
  :hover {
    ${AddEventButton} {
      display: block;
    }
  }
`;
