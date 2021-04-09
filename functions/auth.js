const axios = require("axios");
const admin = require("firebase");
const qs = require("qs");
const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

exports.handler = function (event, context, callback) {
  const firebaseConfig = {
    apiKey: "AIzaSyCscVDdnGiJLjW6srJiSFnlhetD9go6mYs",
    authDomain: "fir-company-uk.firebaseapp.com",
    projectId: "fir-company-uk",
    storageBucket: "fir-company-uk.appspot.com",
    messagingSenderId: "176014343265",
    appId: "1:176014343265:web:e1812fce13ed312ebd7e20",
    measurementId: "G-LY8PG2BE1J",
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.collection("code")
    .add({
      code: event?.queryStringParameters?.code,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
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
