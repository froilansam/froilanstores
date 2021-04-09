const axios = require("axios");
const qs = require("qs");
const { MongoClient } = require("mongodb");

const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

exports.handler = async function (event, context, callback) {
  const uri =
    "mongodb+srv://froilansam:milktpapi@cluster0.vgtqs.mongodb.net/codes_db?retryWrites=true&w=majority";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const test = await client.db("codes_db").collection("codes").findOne();
    console.log("Test: ", test);
  } catch (err) {
    console.log(err); // output to netlify function log
  } finally {
    await client.close();
  }

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
