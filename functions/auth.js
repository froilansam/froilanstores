const axios = require("axios");
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

  axios(
    { url: "https://identity.xero.com/connect/token", method: "post" },
    params,
    config
  )
    .then((data) => {
      callback(null);
      console.log("Data: ", data);
      callback(null, { statusCode: 200, body: data });
    })
    .catch((err) => console.log("Error: ", err));
  console.log("sasas");
};
