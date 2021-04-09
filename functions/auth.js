const axios = require("axios");
const admin = require("firebase");
const qs = require("qs");
var admin = require("firebase-admin");
var serviceAccount = require("../firebase_service_account.json");
const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

exports.handler = async function (event, context, callback) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

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
