import api from "../utils/api";

exports.handler = async function (event, context) {
  try {
    const { data } = await api({
      url: "https://api.xero.com/api.xro/2.0/Invoices",
      method: "PUT",
      data: {
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
    });

    console.log("Data: ", data);
  } catch (e) {
    console.log("Erro: ", e);
  }
};
