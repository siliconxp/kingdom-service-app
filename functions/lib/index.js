"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
exports.createProfile = functions.auth.user()
    .onCreate((userRecord, context) => {
    return admin.firestore().doc(`/users/${userRecord.uid}`).set({
        email: userRecord.email
    });
});
//# sourceMappingURL=index.js.map