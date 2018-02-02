import React from 'react';
import styled from 'styled-components';
import NoEvents from './NoEvents';
import Event from './Event';
import {
  createInterval,
  createFromDate,
  calcVacantIntervals,
  percentFromStart,
  percentFromEnd
} from './timeUtils';

const EventWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ dayInterval, interval }) =>
    percentFromStart(dayInterval, interval.timeStart) + '%'};
  right: ${({ dayInterval, interval }) =>
    percentFromEnd(dayInterval, interval.timeEnd) + '%'};
`;

const RoomEvents = ({ className, events, dayInterval }) => {
  const eventsIntervals = events.map(e =>
    createInterval(createFromDate(e.dateStart), createFromDate(e.dateEnd))
  );
  const vacantIntervals = calcVacantIntervals(dayInterval, eventsIntervals);
  return (
    <div className={className}>
      {vacantIntervals.map((interval, index) => (
        <EventWrapper key={index} dayInterval={dayInterval} interval={interval}>
          <NoEvents />
        </EventWrapper>
      ))}
      {events.map(evt => (
        <EventWrapper
          key={evt.id}
          dayInterval={dayInterval}
          interval={createInterval(
            createFromDate(evt.dateStart),
            createFromDate(evt.dateEnd)
          )}
        >
          <Event dateStart={evt.dateStart} dateEnd={evt.dateEnd} />
        </EventWrapper>
      ))}
    </div>
  );
};

export default styled(RoomEvents)`
  flex-grow: 1;
  height: 28px;
  position: relative;
`;
