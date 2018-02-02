import React, { Component } from 'react';
import styled from 'styled-components';
import { percentFromStart, percentFromEnd } from './timeUtils';

const AddEvent = styled.button`
  width: 57px;
  height: 28px;
  border: none;
  border-radius: 2px;
  background: rgba(43, 80, 253, 1);
  position: absolute;
  z-index: 103;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;

class EmptySlot extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState(() => ({ hovered: true }));
  }

  onMouseOut() {
    this.setState(() => ({ hovered: false }));
  }

  render() {
    const { className, timeStart, timeEnd, dayTimeStart, dayTimeEnd } = this.props;
    return (
      <div
        className={className}
        style={
          {
            left: percentFromStart(dayTimeStart, dayTimeEnd, timeStart) + '%',
            right: percentFromEnd(dayTimeStart, dayTimeEnd, timeEnd) + `%`
          }
        }
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <AddEvent
          style={{
            display: this.state.hovered ? 'block' : 'none'
          }}
        >
          +
        </AddEvent>
      </div>
    );
  }
}

export default styled(EmptySlot)`
  position: absolute;
  background: #fff;
  top: 0;
  bottom: 0;
`;
