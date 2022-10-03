import functions = require("firebase-functions");
import {firestore} from "firebase-admin";

const setDefaultsWhenApplicationCreated =
    functions
        .firestore
        .document("jobs/{jobId}/applications/{applicationId}")
        .onCreate((snap, context) => {
          const jobId = context.params.jobId;
          const applicationId = context.params.applicationId;
          console.debug("Creating application " + applicationId +
              " and job " + jobId);
          return snap.ref.set(
              {
                id: applicationId,
                jobId: jobId,
                createdDtm: firestore.FieldValue.serverTimestamp(),
                updatedDtm: firestore.FieldValue.serverTimestamp(),
              },
              {merge: true}
          );
        });

const setUpdatedDtmWhenApplicationUpdated = functions.firestore
    .document("jobs/{jobId}/applications/{applicationId}")
    .onUpdate((snap, context) => {
      const jobId = context.params.jobId;
      const applicationId = context.params.applicationId;
      console.debug("Set updatedDtm for application " +
            applicationId + " and job " + jobId);
      return snap.after.ref.set(
          {
            updatedDtm: firestore.FieldValue.serverTimestamp(),
          },
          {merge: true}
      );
    });
export {
  setDefaultsWhenApplicationCreated,
  setUpdatedDtmWhenApplicationUpdated,
};
