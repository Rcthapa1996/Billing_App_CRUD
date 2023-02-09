const InitialFormDataOld = {
  name: "",
  principal: "0",
  rate: 2,
  dateOfIssue: "",
  address: "Fattepur",
  contact: "9876543210",
  totalIntrest: "",
  totalAmount: "0",
  transactionDetails: [
    {
      id: 1,
      dateOfIssue: "2078-02-10",
      principal: 1000,
      rate: 2,
      totalIntrest: 10,
      totalAmount: 1010
    },
    {
      id: 2,
      dateOfIssue: "2078-02-10",
      principal: 2000,
      rate: 2,
      totalIntrest: 15,
      totalAmount: 1020
    }
  ]
};

const InitialFormData = {
  id: "1",
  name: { np: "रामचन्द्र थापा", en: "Ramchandra Thapa" },
  address: { np: "फत्तेपुर", en: "Fattepur" },
  contact: "9876543210",
  accountCreationDate: { bs: "2078-02-10", ad: "2022-10-24" },
  transactionDetails: {
    id: "1",
    creationDate: { bs: "2078-02-10", ad: "2022-10-24" },
    principal: "1000",
    rate: "2",
    from: { bs: "2078-02-10", ad: "2022-10-24" },
    to: { bs: "2078-02-10", ad: "2022-10-24" },
    totalMonths: "4",
    totalIntrest: "10",
    totalAmount: "1010",
    type: "Lent"
  }
};

export const FakeNameList = [
  { np: "रामचन्द्र थापा", en: "Ramchandra Thapa" },
  { np: "कैलाश थापा", en: "Kailash Thapa" },
  { np: "विजय लेखी", en: "Bijaya Lekhi" },
  { np: "रामचन्द्र", en: "Ramchandra" }
];

export default InitialFormData;
