const fromDate = date => {
  const fromTheBeginning = new Date(0);
  fromTheBeginning.setHours(date.getHours());
  fromTheBeginning.setMinutes(date.getMinutes());
  return fromTheBeginning;
};

const fromTime = (hours, minutes) => {
  return fromDate(new Date(1970, 0, 1, hours, minutes, 0, 0));
};

const fromString = dateString => {
  return fromDate(new Date(dateString));
};

const minutesCount = time => time.getHours() * 60 + time.getMinutes();

const percentFromStart = (startTime, endTime, time) => {
  const minutesFromStart = minutesCount(time) - minutesCount(startTime);
  const totalMinutes = minutesCount(endTime) - minutesCount(startTime);
  return minutesFromStart / totalMinutes * 100;
};

const percentFromEnd = (startTime, endTime, time) => {
  return 100 - percentFromStart(startTime, endTime, time);
};

const makeHoursArray = (startTime, endTime) => {
  const hours = [];
  for (let h = startTime.getHours() + 1; h <= endTime.getHours(); h++) {
    hours.push(fromDate(new Date(1970, 0, 1, h, 0, 0, 0)));
  }
  return hours;
};

const lessOrEqual = (time1, time2) => time1 - time2 <= 0;
const greater = (time1, time2) => !lessOrEqual(time1, time2); 

const calcFreeTimes = (startTime, endTime, eventsTimes) => {
  if (eventsTimes.length === 0) {
    return [{
      fromTime: startTime,
      toTime: endTime
    }]
  } else {
    const event = eventsTimes[0];
    if (lessOrEqual(event.fromTime, startTime) && lessOrEqual(endTime, event.toTime)) {
      return []
    } else {
      const freeTimes = [];
      if (greater(event.fromTime, startTime)) {
        freeTimes.push({
          fromTime: startTime,
          toTime: event.fromTime
        })
      }
      if (greater(endTime, event.toTime)) {
        freeTimes.push({
          fromTime: event.toTime,
          toTime: endTime
        })
      }
      return freeTimes;
    }
  }
};

export {
  fromDate,
  fromTime,
  fromString,
  percentFromStart,
  percentFromEnd,
  makeHoursArray,
  calcFreeTimes
};
