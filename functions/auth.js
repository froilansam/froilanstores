import axios from "axios";
exports.handler = async function (event, context) {
  console.log("Event: ", event?.queryStringParameters?.code);

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", event?.queryStringParameters?.code);
  params.append("redirect_uri", "https://facebook.com");

  const config = {
    headers: {
      Authorization:
        "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
      "Content-Type": "application/json",
    },
  };

  axios
    .post("https://identity.xero.com/connect/token", params, config)
    .then((data) => {
      console.log("Data: ", data);
    })
    .catch((err) => console.log("Error: ", err));
};
