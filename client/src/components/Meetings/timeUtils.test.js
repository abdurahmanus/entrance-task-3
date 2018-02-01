import { fromTime, calcFreeTimes } from './timeUtils';

describe('calcFreeTimes', () => {
  it('no events', () => {
    const eventsTimes = [];
    const freeTimes = calcFreeTimes(
      fromTime(8, 0),
      fromTime(10, 0),
      eventsTimes
    );
    expect(freeTimes).toEqual([
      {
        fromTime: fromTime(8, 0),
        toTime: fromTime(10, 0)
      }
    ]);
  });

  it('one event all time', () => {
    const eventsTimes = [{ fromTime: fromTime(8, 0), toTime: fromTime(10, 0) }];
    const freeTimes = calcFreeTimes(
      fromTime(8, 0),
      fromTime(10, 0),
      eventsTimes
    );
    expect(freeTimes).toEqual([]);
  });

  it('one event somewhere between start and end', () => {
    const eventsTimes = [{ fromTime: fromTime(9, 0), toTime: fromTime(9, 30) }];
    const freeTimes = calcFreeTimes(
      fromTime(8, 0),
      fromTime(10, 0),
      eventsTimes
    );
    expect(freeTimes).toEqual([
      {
        fromTime: fromTime(8, 0),
        toTime: fromTime(9, 0)
      },
      {
        fromTime: fromTime(9, 30),
        toTime: fromTime(10, 0)
      }
    ]);
  });
});
