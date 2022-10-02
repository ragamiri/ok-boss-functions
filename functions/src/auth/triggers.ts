import functions = require("firebase-functions");
import {getFirestore} from "firebase-admin/firestore";
import {firestore} from "firebase-admin";

type OkBossUser = {
  uid: string;
  displayName: string | undefined;
  disabled: boolean;
  email: string | undefined;
  emailVerified: boolean;
  password: string;
  phoneNumber: string | undefined;
  photoUrl: string | undefined;
  createdDtm: firestore.Timestamp;
  updatedDtm: firestore.Timestamp;
};

const createUserDoc = functions.auth.user().onCreate((userRecord) => {
  console.log("### Create User doc for user " + userRecord.displayName);
  const user = {} as OkBossUser;
  user.uid = userRecord.uid;
  user.photoUrl = userRecord.photoURL;
  user.phoneNumber = userRecord.phoneNumber;
  user.email = userRecord.email;
  user.displayName = userRecord.displayName;
  user.createdDtm = firestore.Timestamp.fromDate(new Date());
  user.updatedDtm = firestore.Timestamp.fromDate(new Date());
  // TODO add try/catch
  getFirestore().collection("users").doc(user.uid).set(user);
});

export {OkBossUser, createUserDoc};
