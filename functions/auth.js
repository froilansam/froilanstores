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
      "Content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    },
    data: qs.stringify(params),
    url: "https://identity.xero.com/connect/token",
  };
  console.log(axios(config));
  axios(config)
    .then((data) => {
      console.log("Data: ", data);
    })
    .catch((err) => console.log("Error: ", err));
  console.log("sasas");
};
