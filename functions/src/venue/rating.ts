import functions = require("firebase-functions");
import {firestore} from "firebase-admin";
import {getFirestore} from "firebase-admin/firestore";
import {calculateAverageFiveStarRating} from "../ratings";

type VenueRating = {
  id: string;
  venueId: string;
  authorId: string;
  authorDisplayName: string;
  rating?: number | undefined;
  comment?: string | undefined;
  createdDtm?: firestore.Timestamp;
  updatedDtm?: firestore.Timestamp;
};

const setDefaultsWhenVenueRatingCreated = functions.firestore
    .document("venues/{venueId}/ratings/{ratingId}")
    .onCreate((snap, context) => {
      const venueId = context.params.venueId;
      const ratingId = context.params.ratingId;
      console.debug("Creating rating " + ratingId + " for venue " + venueId);
      return snap.ref.set(
          {
            id: ratingId,
            venueId: venueId,
            createdDtm: firestore.FieldValue.serverTimestamp(),
            updatedDtm: firestore.FieldValue.serverTimestamp(),
          },
          {merge: true}
      );
    });

const setUpdatedDtmWhenVenueRatingUpdated = functions.firestore
    .document("venues/{venueId}/ratings/{ratingId}")
    .onUpdate((snap, context) => {
      const venueId = context.params.venueId;
      const ratingId = context.params.ratingId;
      console.debug("Set updatedDtm for " + ratingId + " and venue " + venueId);
      return snap.after.ref.set(
          {
            updatedDtm: firestore.FieldValue.serverTimestamp(),
          },
          {merge: true}
      );
    });

const calculateAverageRatingForVenue = functions.firestore
    .document("venues/{venueId}/ratings/{ratingId}")
    .onCreate((snapshot, context) => {
    // Get all the ratings
      const venueId = context.params.venueId;
      console.log("Calculating rating for " + venueId);
      const db = getFirestore();
      db.collection("venues/" + venueId + "/ratings")
          .get()
          .then((snap) => {
            const ratings: number[] = [];
            if (snap.size > 0) {
              snap.forEach((doc) => {
                const userRating = doc.data() as VenueRating;
                if (userRating.rating) {
                  ratings.push(userRating.rating);
                }
              });
              const rating = calculateAverageFiveStarRating(ratings);
              db.collection("venues").doc(venueId).update({rating: rating});
              console.info("Updated venue " + venueId + " rating to " + rating);
            }
          })
          .catch((error) => {
            console.error(
                "Error calculating venue " + venueId + " ratings: " + error
            );
          });
      return;
    });

export {calculateAverageRatingForVenue,
  setDefaultsWhenVenueRatingCreated,
  setUpdatedDtmWhenVenueRatingUpdated};
