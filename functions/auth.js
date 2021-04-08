const axios = require("axios");
const qs = require("qs");

exports.handler = async function (event, context, callback) {
  console.log("Event: ", event?.queryStringParameters?.code);

  const params = {
    grant_type: "authorization_code",
    code: event?.queryStringParameters?.code,
    redirect_uri: "https://facebook.com",
  };

  const config = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    },
    data: params,
    url: "https://identity.xero.com/connect/token",
  };
  try {
    const { data } = await axios(config);
    console.log("sasas", data);
  } catch (e) {
    console.log(e);
  }
};
