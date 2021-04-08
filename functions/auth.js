import api from "../utils/api";
exports.handler = async function (event, context) {
  console.log("Event: ", event?.queryStringParameters?.code);
  api
    .post(
      "https://identity.xero.com/connect/token",
      {
        grant_type: "authorization_code",
        code: event?.queryStringParameters?.code,
        redirect_uri: "https://facebook.com",
      },
      {
        headers: {
          Authorization:
            "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => {
      console.log("Data: ", data);
    })
    .catch((err) => console.log("Error: ", err));
};
