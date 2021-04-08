const axios = require("axios");

const timeout = 10000;

const instance = axios.create({
  timeout,
});

export default instance;

let token;

export function attachToken(attachedToken) {
  token = attachedToken;
}

export function getToken() {
  return token;
}
