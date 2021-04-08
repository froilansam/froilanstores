const axios = require("axios");
const qs = require("qs");

exports.handler = async function (event, context, callback) {
  console.log("Event: ", typeof event?.queryStringParameters?.code);

  const params = {
    grant_type: "authorization_code",
    code: event?.queryStringParameters?.code,
    redirect_uri: "https://facebook.com",
  };

  const config = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      authorization:
        "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    },
    data: qs.stringify(params),
    url: "https://identity.xero.com/connect/token",
  };

  axios({
    url: "http://dummy.restapiexample.com/api/v1/employees",
    method: "GET",
  })
    .then((data) => {
      console.log("Data: ", data);
    })
    .catch((err) => console.log("Error: ", err));
  console.log("sasas");
};
