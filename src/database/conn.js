var admin = require("firebase-admin");
var serviceAccount = require("../path/to/serviceAccountKey.json");

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://registration-demo-5f4b8-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

module.exports = firebase;