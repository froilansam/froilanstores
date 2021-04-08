const api = require("../utils/api");
const config = {
  headers: {
    "Content-Type": "application/json",
    "Xero-Tenant-Id": "b8f641c3-fc81-461c-b1ef-467ed4681ffd",
    Accept: "application/json",
  },
};
exports.handler = async function (event, context) {
  try {
    const { data } = await api.put(
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
      },
      config
    );

    console.log("Data: ", data);
  } catch (e) {
    console.log("Erro: ", e);
  }
};
