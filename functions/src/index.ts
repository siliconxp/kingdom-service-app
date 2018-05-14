

import  * as functions  from 'firebase-functions';
import  * as admin from 'firebase-admin';
admin.initializeApp();

const firestore = admin.firestore();

exports.createProfile = functions.auth.user()
  .onCreate( (userRecord, context) => {

  return admin.firestore().doc(`/users/${userRecord.uid}`).set({
    email: userRecord.email
  });
  
});