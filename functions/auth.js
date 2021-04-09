const axios = require("axios");
const qs = require("qs");
const admin = require("firebase-admin");

const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

exports.handler = async function (event, context, callback) {
  const firebaseConfig = {
    apiKey: "AIzaSyCscVDdnGiJLjW6srJiSFnlhetD9go6mYs",
    authDomain: "fir-company-uk.firebaseapp.com",
    projectId: "fir-company-uk",
    storageBucket: "fir-company-uk.appspot.com",
    messagingSenderId: "176014343265",
    appId: "1:176014343265:web:e1812fce13ed312ebd7e20",
    measurementId: "G-LY8PG2BE1J",
  };

  admin.initializeApp(firebaseConfig);

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
