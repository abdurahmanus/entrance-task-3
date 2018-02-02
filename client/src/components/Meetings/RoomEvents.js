import React from 'react';
import styled from 'styled-components';
import EmptySlot from './EmptySlot';
import Event from './Event';
import { createInterval, createFromDate, calcFreeTimes } from './timeUtils';

const RoomEvents = ({ className, events, dayInterval }) => {
  const eventsTimes = events.map(e =>
    createInterval(createFromDate(e.dateStart), createFromDate(e.dateEnd))
  );

  const freeTimes = calcFreeTimes(
    dayInterval.timeStart,
    dayInterval.timeEnd,
    eventsTimes
  );

  return (
    <div className={className}>
      {freeTimes.map((ft, index) => (
        <EmptySlot
          key={index}
          dayInterval={dayInterval}
          timeStart={ft.timeStart}
          timeEnd={ft.timeEnd}
        />
      ))}
      {events.map(evt => (
        <Event
          key={evt.id}
          dateStart={evt.dateStart}
          dateEnd={evt.dateEnd}
          dayInterval={dayInterval}
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
