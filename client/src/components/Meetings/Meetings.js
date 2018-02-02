import React from 'react';
import styled from 'styled-components';
import { createFromTime } from './timeUtils';
import Header from './Header';
import Body from './Body';

const floors = [
  {
    floor: 1,
    rooms: [
      {
        id: 1,
        title: 'Room 1',
        capacity: 6,
        events: [
          {
            id: 1,
            title: 'event 1',
            dateStart: new Date('2018-01-24T09:41:14.968Z'),
            dateEnd: new Date('2018-01-24T11:41:14.968Z')
          }
        ]
      },
      {
        id: 2,
        title: 'Room 2',
        capacity: 7,
        events: []
      }
    ]
  },
  {
    floor: 2,
    rooms: [
      {
        id: 3,
        title: 'Room 3',
        capacity: 10,
        events: []
      },
      {
        id: 4,
        title: 'Room 4',
        capacity: 12,
        events: []
      }
    ]
  }
];

const dayTimeStart = createFromTime(7, 31)
const dayTimeEnd = createFromTime(23, 12);

const Meetings = ({ className }) => (
  <div className={className}>
    <Header dayTimeStart={dayTimeStart} dayTimeEnd={dayTimeEnd} />
    <Body floors={floors} dayTimeStart={dayTimeStart} dayTimeEnd={dayTimeEnd} />
  </div>
);

export default styled(Meetings)`
  height: calc(100vh - 71px);
  position: relative;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
  background: #f6f7f9;
  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 245px;
    background: #ffffff;
    border-right: 1px solid #e9ecef;
    box-sizing: border-box;
  }
`;
