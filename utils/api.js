const axios = require("axios");

const timeout = 10000;

const instance = axios.create({
  timeout,
});

export default instance;

export function attachToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function detachToken() {
  delete instance.defaults.headers.common.Authorization;
}
