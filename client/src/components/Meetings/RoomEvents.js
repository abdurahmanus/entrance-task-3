import React from 'react';
import styled from 'styled-components';
import NoEvents from './NoEvents';
import Event from './Event';
import {
  createInterval,
  createFromDate,
  calcVacantIntervals
} from './timeUtils';

const RoomEvents = ({ className, events, dayInterval }) => {
  const eventsIntervals = events.map(e =>
    createInterval(createFromDate(e.dateStart), createFromDate(e.dateEnd))
  );
  const vacantIntervals = calcVacantIntervals(dayInterval, eventsIntervals);
  return (
    <div className={className}>
      {vacantIntervals.map((interval, index) => (
        <NoEvents key={index} dayInterval={dayInterval} interval={interval} />
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
