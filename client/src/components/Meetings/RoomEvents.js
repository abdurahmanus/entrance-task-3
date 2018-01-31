import React from 'react';
import styled from 'styled-components';
import EmptySlot from './EmptySlot';
import Event from './Event';

// todo: расчет интервалов, когда нет событий
const calcEmptySlotsTimes = events => {
  return [
    {
      dateStart: new Date(2017, 11, 3, 7, 31, 0, 0),
      dateEnd: new Date(2017, 11, 3, 12, 41, 0, 0)
    }
  ];
};

const RoomEvents = ({ className, events }) => {
  const emptySlots = calcEmptySlotsTimes(events);
  return (
    <div className={className}>
      {emptySlots.map((es, index) => (
        <EmptySlot key={index} from={es.dateStart} to={es.dateEnd} />
      ))}
      {events.map(evt => (
        <Event key={evt.id} from={evt.dateStart} to={evt.dateEnd} />
      ))}
    </div>
  );
};

export default styled(RoomEvents)`
  flex-grow: 1;
  height: 28px;
  position: relative;
`;
