import {createUserDoc} from "./auth";
import {calculateAverageRatingForVenue} from "./venue";

import * as admin from "firebase-admin";
admin.initializeApp();

export {createUserDoc, calculateAverageRatingForVenue};
