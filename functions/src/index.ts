import {createUserDoc} from "./auth";
import {calculateAverageRatingForVenue,
  setTimestampsWhenVenueUpdated,
  setDefaultsWhenVenueCreated,
  setDefaultsWhenVenueRatingCreated,
  setUpdatedDtmWhenVenueRatingUpdated} from "./venue";
import * as admin from "firebase-admin";
admin.initializeApp();

export {createUserDoc, calculateAverageRatingForVenue,
  setTimestampsWhenVenueUpdated, setDefaultsWhenVenueCreated,
  setDefaultsWhenVenueRatingCreated, setUpdatedDtmWhenVenueRatingUpdated};
