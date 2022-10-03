import {createUserDoc} from "./auth";
import {calculateAverageRatingForVenue,
  setUpdatedDtmWhenVenueUpdated,
  setDefaultsWhenVenueCreated,
  setDefaultsWhenVenueRatingCreated,
  setUpdatedDtmWhenVenueRatingUpdated} from "./venue";
import * as admin from "firebase-admin";
admin.initializeApp();

export {createUserDoc, calculateAverageRatingForVenue,
  setUpdatedDtmWhenVenueUpdated, setDefaultsWhenVenueCreated,
  setDefaultsWhenVenueRatingCreated, setUpdatedDtmWhenVenueRatingUpdated};
