import { createInterval, createFromTime, calcFreeTimes } from './timeUtils';

describe('calcFreeTimes', () => {
  it('no events', () => {
    const eventsTimes = [];
    const freeTimes = calcFreeTimes(
      createFromTime(8),
      createFromTime(10),
      eventsTimes
    );
    expect(freeTimes).toEqual([
      createInterval(createFromTime(8), createFromTime(10))
    ]);
  });

  describe('one event', () => {
    it('starts from Start end ends to End', () => {
      const eventsTimes = [
        createInterval(createFromTime(8), createFromTime(10))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('somewhere between Start and End', () => {
      const eventsTimes = [
        createInterval(createFromTime(9), createFromTime(9, 30))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([
        createInterval(createFromTime(8), createFromTime(9)),
        createInterval(createFromTime(9, 30), createFromTime(10))
      ]);
    });

    it('starts before Start and ends after End', () => {
      const eventsTimes = [
        createInterval(createFromTime(7, 59), createFromTime(10, 1))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('starts before Start end ends to End', () => {
      const eventsTimes = [
        createInterval(createFromTime(7, 59), createFromTime(10))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('starts before Start and ends between Start and End', () => {
      const eventsTimes = [
        createInterval(createFromTime(7, 59), createFromTime(9, 30))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([
        createInterval(createFromTime(9, 30), createFromTime(10))
      ]);
    });

    it('starts from Start end ends after End', () => {
      const eventsTimes = [
        createInterval(createFromTime(8), createFromTime(10, 1))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([]);
    });

    it('starts between Start and End and ends after End', () => {
      const eventsTimes = [
        createInterval(createFromTime(8, 1), createFromTime(10, 1))
      ];
      const freeTimes = calcFreeTimes(
        createFromTime(8),
        createFromTime(10),
        eventsTimes
      );
      expect(freeTimes).toEqual([
        createInterval(createFromTime(8), createFromTime(8, 1))
      ]);
    });
  });

  // describe('two events', () => {
  //   it('one right after another', () => {
  //     const eventsTimes = [
  //       { timeStart: fromTime(8, 0), timeEnd: fromTime(9, 0) },
  //       { timeStart: fromTime(9, 0), timeEnd: fromTime(10, 0) }
  //     ];
  //     const freeTimes = calcFreeTimes(
  //       fromTime(8, 0),
  //       fromTime(10, 0),
  //       eventsTimes
  //     );
  //     expect(freeTimes).toEqual([]);
  //   })
  // })
});
