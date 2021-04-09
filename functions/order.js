const api = require("../utils/api");
const { getToken } = require("../utils/api");
const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  const client = new MongoClient(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const tokens = await client.db("codes_db").collection("tokens").findOne();
    console.log("Tokens: ", tokens);

    const { data } = await axios.put(
      "https://api.xero.com/api.xro/2.0/Invoices",
      {
        Type: "ACCREC",
        Contact: {
          Name: "Froilan Sam",
        },
        Date: "/Date(1518685950940+0000)/",
        DueDate: "/Date(1518685950940+0000)/",
        DateString: "2009-05-27T00:00:00",
        DueDateString: "2009-06-06T00:00:00",
        LineAmountTypes: "Exclusive",
        LineItems: [
          {
            Description:
              "Consulting services as agreed (30% off standard rate)",
            Quantity: "10",
            UnitAmount: "100.00",
            AccountCode: "200",
            DiscountRate: "20",
          },
        ],
      }
    );

    console.log("Data: ", data);
  } catch (e) {
    console.log("Erro: ", e);
  }
};
