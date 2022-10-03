import functions = require("firebase-functions");
import {firestore} from "firebase-admin";

const setDefaultsWhenVenueCreated = functions.firestore
    .document("venues/{venueId}")
    .onCreate((snap, context) => {
      const venueId = context.params.venueId;
      return snap.ref.set(
          {
            id: venueId,
            createDtm: firestore.FieldValue.serverTimestamp(),
            updatedDtm: firestore.FieldValue.serverTimestamp(),
          },
          {merge: true}
      );
    });

const setTimestampsWhenVenueUpdated = functions.firestore
    .document("venues/{venueId}")
    .onCreate((snap, context) => {
      return snap.ref.set(
          {
            updatedDtm: firestore.FieldValue.serverTimestamp(),
          },
          {merge: true}
      );
    });

export {setDefaultsWhenVenueCreated, setTimestampsWhenVenueUpdated};
