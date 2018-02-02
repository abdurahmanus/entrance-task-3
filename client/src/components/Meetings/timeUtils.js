const createInterval = (timeStart, timeEnd) => {
  if (
    !(
      Object.prototype.toString.call(timeStart) === '[object Date]' &&
      Object.prototype.toString.call(timeEnd) === '[object Date]'
    )
  ) {
    throw new Error('invalid times provided');
  }
  return {
    timeStart,
    timeEnd
  };
};

const createFromDate = date => {
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('invalid date provided');
  }

  const fromTheBeginning = new Date(0);
  fromTheBeginning.setHours(date.getHours());
  fromTheBeginning.setMinutes(date.getMinutes());
  return fromTheBeginning;
};

const createFromTime = (hours, minutes = 0) => {
  return createFromDate(new Date(1970, 0, 1, hours, minutes, 0, 0));
};

const minutesCount = time => time.getHours() * 60 + time.getMinutes();

const percentFromStart = (interval, time) => {
  const { timeStart, timeEnd } = interval;
  const minutesFromStart = minutesCount(time) - minutesCount(timeStart);
  const totalMinutes = minutesCount(timeEnd) - minutesCount(timeStart);
  return minutesFromStart / totalMinutes * 100;
};

const percentFromEnd = (interval, time) => {
  return 100 - percentFromStart(interval, time);
};

const makeHoursArray = interval => {
  const { timeStart, timeEnd } = interval;
  const hours = [];
  for (let h = timeStart.getHours() + 1; h <= timeEnd.getHours(); h++) {
    hours.push(createFromTime(h, 0));
  }
  return hours;
};

const lessOrEqual = (time1, time2) => time1 - time2 <= 0;
const greater = (time1, time2) => !lessOrEqual(time1, time2);

// todo: refactor
const calcFreeTimes = (dayTimeStart, dayTimeEnd, eventsTimes) => {
  if (eventsTimes.length === 0) {
    return [createInterval(dayTimeStart, dayTimeEnd)];
  }
  const { timeStart, timeEnd } = eventsTimes[0];
  if (
    lessOrEqual(timeStart, dayTimeStart) &&
    lessOrEqual(dayTimeEnd, timeEnd)
  ) {
    return [];
  } else {
    const freeTimes = [];
    if (greater(timeStart, dayTimeStart)) {
      freeTimes.push(createInterval(dayTimeStart, timeStart));
    }
    if (greater(dayTimeEnd, timeEnd)) {
      freeTimes.push(createInterval(timeEnd, dayTimeEnd));
    }
    return freeTimes;
  }
};

export {
  createFromDate,
  createFromTime,
  createInterval,
  percentFromStart,
  percentFromEnd,
  makeHoursArray,
  calcFreeTimes
};
