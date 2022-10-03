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

const setUpdatedDtmWhenVenueUpdated = functions.firestore
    .document("venues/{venueId}")
    .onUpdate((snap, context) => {
      return snap.after.ref.set(
          {
            updatedDtm: firestore.FieldValue.serverTimestamp(),
          },
          {merge: true}
      );
    });

export {setDefaultsWhenVenueCreated, setUpdatedDtmWhenVenueUpdated};
