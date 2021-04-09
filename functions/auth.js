const axios = require("axios");
const qs = require("qs");
var admin = require("firebase-admin");
const { attachToken } = require("../utils/api");

const config = {
  headers: {
    Authorization:
      "Basic MjNFQzZFMDJDMzgwNDUyNzkxNUQwRjc1NzZCNDEyM0M6VFNLcTY1QWFyUkNINTlzazdLVl9GeGJFY2IxYjNMeTZfankyQkp4dFVEMGZDWXlM",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

exports.handler = async function (event, context, callback) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      project_id: "fir-company-uk",
      private_key_id: "eb6c6fb0efae824063f6bd437f1bc11482b27c2b",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCjqkYIXyLv1WtU\nXgNdjNdPaNXOila7GexdvWJzItnFGTUfpEuk9OctoIPQkclcBVC60J7sCkndFSZO\n4d3ZepTDFACKibdpiOJ7Xm7A5o8bG7itajiXIo7QS9iRAu0/DbBIAVALT38xUrpj\n9sQBLMZs+mqS5L+C+kpI+CeQNVopz4sIZ2uwqHm7e18zJhapgUyxqSbLuqBe9z/b\n62vQvxB7nufmmSMWx1cPrem6Nmy78HGDTqBdL53Q7k9+DMMJ/PU7HVtz0mDnt2Vg\nv6x4MfOfCYkUPYBxuLIka7My+67B3KVMRsyFexByUIxv/q2SisOBC2/p/zrTsxLT\ngmE7QKytAgMBAAECggEAA2i1IjtXEd9PEm1jN7mKtOb7sxxluj/L5lee8MPW/OMY\nR0MyZyp0aUUjZxQDpB92jcRG1yb6Cw6ZIxdTJL1H/XiRxVD2iXkg3I3Rk+ze1Lij\nBAuxx5DK9ZLq3SRjjDFtDKboWP/20oXFB6GDdicjBUXsXohrZnSaWQLq52GmceH4\ns1k2r6SQ3xL6fTcgVxAy6iJAxd1hAa102EAR+iBG7H+w4qgESzDdxrFs2HLDI9tI\nn6H6FAM5TQ74ghZazXnAwgPD6cf6llxm4+Y0Z38mqzg3RX0v+i9FuWyBG5E9tyGk\n6fv6Ey4O30awGhzX29ilq36a/eskvh21pKgHwWCy+QKBgQDM9cjN8KqLjBPzkB0A\nZazdF0rzR59X28GrcCjWbRani/W9heoiU8ricPhg1LZV8dnMA5byNRaBnGZah4vk\nSx5LvURLRbVcrOt4I/PTYYDfPA5/ERYyChQX8w542Qn65qfixVniPAFa/vliky35\nwlWR79QiJZwudfI6dpkhPxRUhQKBgQDMa+7r2osUHnXVRq83ZEgWFjP2A5H4QLw9\nqcWSnhrz6O9XOh3kW6/unZPRdvm8QCPXEg24ERGIzBIEPG67LVksBx5i48K2TtVh\nn8vuhgekf/HuBAFSPfaqaLTY8fAWNe/BHLEspQ+d+jKZ/6T3IkTBhSmFxdyeVCKw\ngXqjCTskCQKBgQCl4VKIonxU/qTzHjLqrF+QfJaTeOcUo24GQ3s5uAZ6ycK0hdpt\nt+VfCVFshRuhSWEdRdZ35tF1StBn+oYU2VsGr4LDbQKQo/7bODXRYXt8sM2Gt5yA\nGToT/Ao9cmMqZl2AIntRp4DtVakex8GQ/2BkAXdtv4S88YZ/HJdomfXpRQKBgQCv\nMrIKIbug+poyt+njp2bAxzaxWk34XkL29lIGXsrq0HCQaZbE6G/YKeVOWJGg7bfJ\n1Ac+AiLtAzlNuB2O/ka2nUNFrb5rURVAHhxByU0zhxRp0bTwL3sAgcy9Ql1qK7/X\n2idfA/hmhNBpe9h+ljgnQ2Fa7UEv0RwJ+m6I3Jh7QQKBgQDDxvqNeClif8IDWfCQ\npZjoKhj+d066f6LS66PQNoGxo6entcTHfd5v0DJGhFEqk829cHxFRaod7W8WP3C/\nTsKvuEcXavcpjjGMuMiage4fna/SGWUkQiwQkkN7bN5nXI4pVFQoJillnKxAlUsA\nIx6xvwKfT2Hh5Phlb5jp0yuMqg==\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-3vffk@fir-company-uk.iam.gserviceaccount.com",
      client_id: "103525427159704288789",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3vffk%40fir-company-uk.iam.gserviceaccount.com",
    }),
  });

  const db = admin.firestore();
  const docRef = db.collection("code").doc();

  await docRef.set({
    code: event?.queryStringParameters?.code,
  });

  //   const params = new URLSearchParams();
  //   params.append("grant_type", "authorization_code");
  //   params.append("code", event?.queryStringParameters?.code);
  //   params.append(
  //     "redirect_uri",
  //     "https://froilanstores.netlify.app/.netlify/functions/auth"
  //   );

  //   try {
  //     const { data } = await axios.post(
  //       "https://identity.xero.com/connect/token",
  //       params,
  //       config
  //     );

  //     attachToken(data.access_token);
  //   } catch (e) {
  //     console.log(e);
  //   }
};
