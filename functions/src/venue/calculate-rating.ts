import functions = require('firebase-functions');
import { firestore } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { calculateAverageFiveStarRating } from '../ratings';

type VenueRating = {
  id: string;
  venueId: string;
  authorId: string;
  authorDisplayName: string;
  rating: number;
  comment: string | undefined;
  createdDtm: firestore.Timestamp;
  updatedDtm: firestore.Timestamp;
};

const calculateAverageRatingForVenue = functions.firestore
  .document('venues/{venueId}/ratings')
  .onCreate((snapshot, context) => {
    // Get all the ratings
    const venueId = context.params.venueId;
    console.log('Calculating rating for ' + venueId);
    const db = getFirestore();
    db.collection('venues/' + venueId + '/ratings')
      .get()
      .then((snap) => {
        const ratings: number[] = [];
        if (snap.size > 0) {
          console.log(snap.size + ' ratings for ' + venueId);
          snap.forEach((doc) => {
            const userRating = doc.data() as VenueRating;
            ratings.push(userRating.rating);
          });
          const rating = calculateAverageFiveStarRating(ratings);
          db.collection('venues').doc(venueId).update({ rating: rating });
          console.log('Updated venue ' + venueId + ' rating to ' + rating);
        }
      })
      .catch((error) => {
        console.error(
          'Error calculating venue ' + venueId + ' ratings: ' + error
        );
      });
  });

export { calculateAverageRatingForVenue };
