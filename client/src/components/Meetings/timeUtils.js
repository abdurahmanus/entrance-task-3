// todo incapsulate time and interval

const createFromDate = date => {
  const fromTheBeginning = new Date(0);
  fromTheBeginning.setHours(date.getHours());
  fromTheBeginning.setMinutes(date.getMinutes());
  return fromTheBeginning;
};

const createFromTime = (hours, minutes) => {
  return createFromDate(new Date(1970, 0, 1, hours, minutes, 0, 0));
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
    hours.push(createFromTime(h, 0));
  }
  return hours;
};

const lessOrEqual = (time1, time2) => time1 - time2 <= 0;
const greater = (time1, time2) => !lessOrEqual(time1, time2);

// todo: refactor
const calcFreeTimes = (dayTimeStart, dayTimeEnd, eventsTimes) => {
  if (eventsTimes.length === 0) {
    return [
      {
        timeStart: dayTimeStart,
        timeEnd: dayTimeEnd
      }
    ];
  }
  const event = eventsTimes[0];
  if (
    lessOrEqual(event.timeStart, dayTimeStart) &&
    lessOrEqual(dayTimeEnd, event.timeEnd)
  ) {
    return [];
  } else {
    const freeTimes = [];
    if (greater(event.timeStart, dayTimeStart)) {
      freeTimes.push({
        timeStart: dayTimeStart,
        timeEnd: event.timeStart
      });
    }
    if (greater(dayTimeEnd, event.timeEnd)) {
      freeTimes.push({
        timeStart: event.timeEnd,
        timeEnd: dayTimeEnd
      });
    }
    return freeTimes;
  }
};

export {
  createFromDate,
  createFromTime,
  percentFromStart,
  percentFromEnd,
  makeHoursArray,
  calcFreeTimes
};
