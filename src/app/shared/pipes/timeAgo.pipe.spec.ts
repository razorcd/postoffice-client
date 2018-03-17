import {TimeAgoPipe} from "./timeAgo.pipe";


describe("TimeAgoPipe", () => {
  let timeAgoPipe:TimeAgoPipe;
  let fixedCurrentTime = new Date(31536000000); // 1 year (1971)

  beforeEach(() => {
    jasmine.clock().install();  // set time mock
    jasmine.clock().mockDate(fixedCurrentTime);
    timeAgoPipe = new TimeAgoPipe();
  });

  afterEach(() => {
    jasmine.clock().uninstall(); // release time mock
  });

  it("should return humanised time difference since present", () => {
    expect(timeAgoPipe.transform(<number>fixedCurrentTime.valueOf())).toBe("a few seconds ago");
    expect(timeAgoPipe.transform(fixedCurrentTime.valueOf() - 60000)).toBe("a minute ago");
    expect(timeAgoPipe.transform(fixedCurrentTime.valueOf() - 60000*60)).toBe("an hour ago");
    expect(timeAgoPipe.transform(fixedCurrentTime.valueOf() - 60000*60*24)).toBe("a day ago");
    expect(timeAgoPipe.transform(fixedCurrentTime.valueOf() - 60000*60*24*31)).toBe("a month ago");
    expect(timeAgoPipe.transform(0)).toBe("a year ago");
  });

});
