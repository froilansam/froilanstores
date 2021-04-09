const axios = require("axios");
const qs = require("qs");
const mongoose = require("mongoose");

const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

exports.handler = async function (event, context, callback) {
  mongoose.connect(
    "mongodb+srv://froilansam:milktpapi@cluster0.vgtqs.mongodb.net/codes_db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  const Kitten = mongoose.model("Kitten", kittySchema);

  // const silence = new Kitten({ name: "Silence" });

  const all = Kitten.find();

  console.log("A: ", all);

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
