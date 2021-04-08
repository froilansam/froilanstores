const axios = require("axios");
const qs = require("qs");

exports.handler = async function (event, context, callback) {
  console.log("Event: ", typeof event?.queryStringParameters?.code);

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", event?.queryStringParameters?.code);
  params.append("redirect_uri", "https://facebook.com");

  const config = {
    headers: {
      Authorization:
        "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  console.log("Params: ", params);

  try {
    const { data } = await axios.post(
      "https://identity.xero.com/connect/token",
      params,
      config
    );

    console.log("Data:", data);
  } catch (e) {
    console.log(e);
  }
};
