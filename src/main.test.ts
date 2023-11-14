import {describe, expect, jest, test} from '@jest/globals';
import * as model from "./model";

global.alert = jest.fn();

describe("Ticket 2", function () {
  // Business tests
  test("addToWaitingQueue is defined", function () {
    expect(model.addToWaitingQueue).toBeDefined();
  });

  test("accept player", function () {
    expect(
      model.addToWaitingQueue({ username: "Fraktar", level: 1 })
    ).toBeTruthy();
  });

  test("reject player", function () {
    expect(
      model.addToWaitingQueue({ username: "Fraktar", level: 1 })
    ).toBeFalsy();
    expect(model.addToWaitingQueue({ username: "", level: 1 })).toBeFalsy();
    expect(
      model.addToWaitingQueue({ username: "", level: undefined as unknown as number })
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
