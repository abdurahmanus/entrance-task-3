import React from 'react';
import styled from 'styled-components';

import Background from './Background';
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

const Meetings = ({ className }) => (
  <div className={className}>
    <Background />
    <Header />
    <Body floors={floors} />
  </div>
);

export default styled(Meetings)`
  height: calc(100vh - 71px);
  position: relative;
  font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
`;
