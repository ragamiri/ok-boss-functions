/**
 * Calculate the average rating for 1-5 star ratings.
 * Use the following formula
 * AR = 1*a+2*b+3*c+4*d+5*e/(R)
 *  a is the number of 1-star ratings
 * b is the number of 2-star ratings
 * c is the number of 3-star ratings
 * d is the number of 4-star ratings
 * e is the number of 5-star ratings
 * R is the total number of ratings
 * @param {number[]} ratings - an array that contains all the ratings
 * @return {number} The average rating calculated from all ratings
 */
function calculateAverageFiveStarRating(ratings: number[]): number {
  const oneStarRatings: number[] = [];
  const twoStarRatings: number[] = [];
  const threeStarRatings: number[] = [];
  const fourStarRatings: number[] = [];
  const fiveStarRatings: number[] = [];
  ratings.forEach((rating) => {
    switch (rating) {
      case 1:
        oneStarRatings.push(rating);
        break;
      case 2:
        twoStarRatings.push(rating);
        break;
      case 3:
        threeStarRatings.push(rating);
        break;
      case 4:
        fourStarRatings.push(rating);
        break;
      case 5:
        fiveStarRatings.push(rating);
        break;
    }
  });
  if (ratings.length && ratings.length > 0) {
    console.log("Num Ratings: " + +ratings.length);
    console.log(
        oneStarRatings.length +
        " " +
        twoStarRatings.length +
        " " +
        threeStarRatings.length +
        " " +
        fourStarRatings.length +
        " " +
        fiveStarRatings.length +
        " "
    );
    const averageRating =
      (1 * oneStarRatings.length +
        2 * twoStarRatings.length +
        3 * threeStarRatings.length +
        4 * fourStarRatings.length +
        5 * fiveStarRatings.length) /
      ratings.length;
    return averageRating;
  } else {
    return 0;
  }
}

export {calculateAverageFiveStarRating};
