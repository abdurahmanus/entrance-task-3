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

  describe('one event', () => {
    it('starts from Start end ends to End', () => {
      const eventsTimes = [
        { fromTime: fromTime(8, 0), toTime: fromTime(10, 0) }
      ];
      const freeTimes = calcFreeTimes(
        fromTime(8, 0),
        fromTime(10, 0),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('somewhere between Start and End', () => {
      const eventsTimes = [
        { fromTime: fromTime(9, 0), toTime: fromTime(9, 30) }
      ];
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

    it('starts before Start and ends after End', () => {
      const eventsTimes = [
        { fromTime: fromTime(7, 59), toTime: fromTime(10, 1) }
      ];
      const freeTimes = calcFreeTimes(
        fromTime(8, 0),
        fromTime(10, 0),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('starts before Start end ends to End', () => {
      const eventsTimes = [
        { fromTime: fromTime(7, 59), toTime: fromTime(10, 0) }
      ];
      const freeTimes = calcFreeTimes(
        fromTime(8, 0),
        fromTime(10, 0),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('starts before Start and ends between Start and End', () => {
      const eventsTimes = [
        { fromTime: fromTime(7, 59), toTime: fromTime(9, 30) }
      ];
      const freeTimes = calcFreeTimes(
        fromTime(8, 0),
        fromTime(10, 0),
        eventsTimes
      );
      expect(freeTimes).toEqual([
        {
          fromTime: fromTime(9, 30),
          toTime: fromTime(10, 0)
        }
      ]);
    });

    it('starts from Start end ends after End', () => {
      const eventsTimes = [
        { fromTime: fromTime(8, 0), toTime: fromTime(10, 1) }
      ];
      const freeTimes = calcFreeTimes(
        fromTime(8, 0),
        fromTime(10, 0),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('starts between Start and End and ends after End', () => {
      const eventsTimes = [
        { fromTime: fromTime(8, 1), toTime: fromTime(10, 1) }
      ];
      const freeTimes = calcFreeTimes(
        fromTime(8, 0),
        fromTime(10, 0),
        eventsTimes
      );
      expect(freeTimes).toEqual([
        {
          fromTime: fromTime(8, 0),
          toTime: fromTime(8, 1)
        }
      ]);
    });
  });
});
