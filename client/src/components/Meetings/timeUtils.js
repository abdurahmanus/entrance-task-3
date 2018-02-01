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

const calcFreeTimes = (startTime, endTime, eventsTimes) => {
  return eventsTimes.reduce(
    (freeTimes, eventTime) => {
      return freeTimes;
    },
    [
      {
        fromTime: startTime,
        toTime: endTime
      }
    ]
  );
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
