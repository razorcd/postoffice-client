import {TimeISOPipe} from "./timeISO.pipe";


describe("TimeISOPipe", () => {
  let timeISOPipe:TimeISOPipe;

  beforeEach(() => {
    timeISOPipe = new TimeISOPipe();
  });

  it("should return humanised time difference since present", () => {
    expect(timeISOPipe.transform(1519424811445)).toBe("2018-02-23T22:26:51.445Z");
  });

});
