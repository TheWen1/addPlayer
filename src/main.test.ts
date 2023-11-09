import * as code from "./model";

describe("Ticket 2", function () {
  // Business tests
  test("addToWaitingQueue is defined", function () {
    expect(code.addToWaitingQueue).toBeDefined();
  });

  test("accept player", function () {
    expect(
      code.addToWaitingQueue({ username: "Fraktar", level: 1 })
    ).toBeTruthy();
  });

  test("reject player", function () {
    expect(
      code.addToWaitingQueue({ username: "Fraktar", level: 1 })
    ).toBeFalsy();
    expect(code.addToWaitingQueue({ username: "", level: 1 })).toBeFalsy();
    expect(
      code.addToWaitingQueue({ username: "", level: undefined })
    ).toBeFalsy();
  });
});

/* describe("Ticket 3", function () {
  test("removeFromWaitingQueue is defined", function () {
    expect(code.removeFromWaitingQueue).toBeDefined();
  });

  test("remove first player", function () {
    expect(code.removeFromWaitingQueue().username).toBe("Fraktar");
    expect(code.queue).toHaveLength(0);
  });
});
 */
