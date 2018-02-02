import React from 'react';
import styled from 'styled-components';
import EmptySlot from './EmptySlot';
import Event from './Event';
import { createFromDate, calcFreeTimes } from './timeUtils';

const RoomEvents = ({ className, events, dayTimeStart, dayTimeEnd }) => {
  const eventsTimes = events.map(e => ({
    timeStart: createFromDate(e.dateStart),
    timeEnd: createFromDate(e.dateEnd)
  }));

  const freeTimes = calcFreeTimes(dayTimeStart, dayTimeEnd, eventsTimes);

  return (
    <div className={className}>
      {freeTimes.map((ft, index) => (
        <EmptySlot
          key={index}
          dayTimeStart={dayTimeStart}
          dayTimeEnd={dayTimeEnd}
          timeStart={ft.timeStart}
          timeEnd={ft.timeEnd}
        />
      ))}
      {events.map(evt => (
        <Event
          key={evt.id}
          dateStart={evt.dateStart}
          dateEnd={evt.dateEnd}
          dayTimeStart={dayTimeStart}
          dayTimeEnd={dayTimeEnd}
        />
      ))}
    </div>
  );
};

export default styled(RoomEvents)`
  flex-grow: 1;
  height: 28px;
  position: relative;
`;
