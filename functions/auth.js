const axios = require("axios");
const qs = require("qs");
var admin = require("firebase-admin");
const { attachToken } = require("../utils/api");

const serviceAccount = require("../firebase_service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

exports.handler = async function (event, context, callback) {
  const docRef = db.collection("code").doc();

  await docRef.set({
    code: event?.queryStringParameters?.code,
  });

  //   const params = new URLSearchParams();
  //   params.append("grant_type", "authorization_code");
  //   params.append("code", event?.queryStringParameters?.code);
  //   params.append(
  //     "redirect_uri",
  //     "https://froilanstores.netlify.app/.netlify/functions/auth"
  //   );

  //   try {
  //     const { data } = await axios.post(
  //       "https://identity.xero.com/connect/token",
  //       params,
  //       config
  //     );

  //     attachToken(data.access_token);
  //   } catch (e) {
  //     console.log(e);
  //   }
};
