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
  try {
    console.log(process.env.DB_URL);
    const uri = process.env.DB_URL;

    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", event?.queryStringParameters?.code);
    params.append(
      "redirect_uri",
      "https://froilanstores.netlify.app/.netlify/functions/auth"
    );

    const { data } = await axios.post(
      "https://identity.xero.com/connect/token",
      params,
      config
    );

    await client.db("codes_db").collection("tokens").drop();

    const test = await client.db("codes_db").collection("tokens").insertOne({
      token: data.access_token,
      refresh_token: data.refresh_token,
    });
    console.log("Test: ", test);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};
