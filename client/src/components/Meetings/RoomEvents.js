import React from 'react';
import styled from 'styled-components';
import EmptySlot from './EmptySlot';
import Event from './Event';
import { fromDate, calcFreeTimes } from './timeUtils';

const RoomEvents = ({ className, events, startTime, endTime }) => {
  const eventsTimes = events.map(e => ({
    fromTime: fromDate(e.dateStart),
    toTime: fromDate(e.dateEnd)
  }));

  const freeTimes = calcFreeTimes(startTime, endTime, eventsTimes);

  return (
    <div className={className}>
      {freeTimes.map((ft, index) => (
        <EmptySlot
          key={index}
          startTime={startTime}
          endTime={endTime}
          fromTime={ft.fromTime}
          toTime={ft.toTime}
        />
      ))}
      {events.map(evt => (
        <Event
          key={evt.id}
          dateStart={evt.dateStart}
          dateEnd={evt.dateEnd}
          startTime={startTime}
          endTime={endTime}
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
