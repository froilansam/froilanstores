const axios = require("axios");

const timeout = 10000;

const instance = axios.create({
  timeout,
});

export default instance;

export function attachToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["Xero-Tenant-Id"] =
    "b8f641c3-fc81-461c-b1ef-467ed4681ffd";
  instance.defaults.headers.common.Accept = "application/json";
}

export function detachToken() {
  delete instance.defaults.headers.common.Authorization;
}
