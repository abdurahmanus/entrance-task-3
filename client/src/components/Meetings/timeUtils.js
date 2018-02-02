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
const calcVacantIntervals = (dayInterval, eventsIntervals) => {
  if (eventsIntervals.length === 0) {
    return [dayInterval];
  }
  const { timeStart, timeEnd } = eventsIntervals[0];
  if (
    lessOrEqual(timeStart, dayInterval.timeStart) &&
    lessOrEqual(dayInterval.timeEnd, timeEnd)
  ) {
    return [];
  } else {
    const vacantIntervals = [];
    if (greater(timeStart, dayInterval.timeStart)) {
      vacantIntervals.push(createInterval(dayInterval.timeStart, timeStart));
    }
    if (greater(dayInterval.timeEnd, timeEnd)) {
      vacantIntervals.push(createInterval(timeEnd, dayInterval.timeEnd));
    }
    return vacantIntervals;
  }
};

export {
  createFromDate,
  createFromTime,
  createInterval,
  percentFromStart,
  percentFromEnd,
  makeHoursArray,
  calcVacantIntervals
};
