import {calculateAverageFiveStarRating} from "./index";

describe("calculateAverageRating", () => {
  test("returns 0 for 0 ratings", () => {
    expect(calculateAverageFiveStarRating([])).toEqual(0);
  });
  test("returns 0 for 0 ratings", () => {
    const ratings: number[] = [4, 3, 1, 4, 0];
    expect(calculateAverageFiveStarRating(ratings)).toEqual(2.4);
  });
});
