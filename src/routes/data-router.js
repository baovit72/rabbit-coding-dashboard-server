const admin = require("firebase-admin");
const serviceAccount = require("./firebase");

var express = require("express");
var router = express.Router();
const collectionName = "responses";
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
let db = admin.firestore();
router.get("/", function (req, res, next) {
  let data = {};
  data[collectionName] = {};

  let results = db
    .collection(collectionName)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        data[collectionName][doc.id] = doc.data();
      });
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  results.then((dt) => res.status(200).send(data));
});
router.post("/", function (req, res, next) {
  console.log(JSON.stringify(req.body));
  const data = JSON.parse(req.body.data);
  const docId = data.id;
  delete data.id;
  db.collection(collectionName)
    .doc(docId)
    .set(data)
    .then(() => res.status(200).send({ data: data }))
    .catch(() => res.status(200).send({ err: true }));
});

module.exports = router;
