import {createUserDoc} from "./auth";
import {calculateAverageRatingForVenue,
  setUpdatedDtmWhenVenueUpdated,
  setDefaultsWhenVenueCreated,
  setDefaultsWhenVenueRatingCreated,
  setUpdatedDtmWhenVenueRatingUpdated,
  setUpdatedDtmWhenApplicationUpdated} from "./venue";
import * as admin from "firebase-admin";

let setDefaultsWhenApplicationsCreated;

admin.initializeApp();

export {
  createUserDoc,
  calculateAverageRatingForVenue,
  setUpdatedDtmWhenVenueUpdated,
  setDefaultsWhenVenueCreated,
  setDefaultsWhenVenueRatingCreated,
  setUpdatedDtmWhenVenueRatingUpdated,
  setDefaultsWhenApplicationsCreated,
  setUpdatedDtmWhenApplicationUpdated};
