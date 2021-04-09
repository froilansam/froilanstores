const axios = require("axios");
const qs = require("qs");
const admin = require("firebase-admin");
const fetch = require("node-fetch");

const serviceAccount = require("../../firebase_service_account.json"); // Update this to your file

const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

// Initialise the admin with the credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.handler = async function (event, context, callback) {
  const db = admin.firestore();

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
