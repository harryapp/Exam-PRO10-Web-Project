const FinancialDataModule = (function () {
  const expenceData = [
    {
      storeId: 1,
      date: "2021-04-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2021-03-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2021-02-28",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2021-01-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-12-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-11-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-10-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-09-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-08-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-07-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-06-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-05-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-04-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-03-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-02-29",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2020-01-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-12-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-11-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-10-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-09-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-08-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-07-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-06-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-05-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-04-30",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-03-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-02-28",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2019-01-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },
    {
      storeId: 1,
      date: "2018-12-31",
      expences: {
        rent: 42000,
        utility: 15000,
        insurance: 5000,
        interest: 4000,
      },
    },

    {
      storeId: 2,
      date: "2021-04-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2021-03-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2021-02-28",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2021-01-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-12-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-11-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-10-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-09-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-08-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-07-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-06-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-05-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-04-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-03-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-02-29",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2020-01-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-12-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-11-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-10-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-09-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-08-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-07-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-06-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-05-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-04-30",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-03-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-02-28",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2019-01-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },
    {
      storeId: 2,
      date: "2018-12-31",
      expences: {
        rent: 29000,
        utility: 12000,
        insurance: 3000,
        interest: 5000,
      },
    },

    {
      storeId: 3,
      date: "2021-04-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2021-03-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2021-02-28",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2021-01-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-12-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-11-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-10-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-09-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-08-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-07-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-06-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-05-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-04-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-03-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-02-29",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2020-01-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-12-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-11-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-10-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-09-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-08-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-07-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-06-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-05-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-04-30",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-03-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-02-28",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2019-01-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 3,
      date: "2018-12-31",
      expences: {
        rent: 40000,
        utility: 13000,
        insurance: 3500,
        interest: 3800,
      },
    },
    {
      storeId: 4,
      date: "2021-04-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2021-03-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2021-02-28",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2021-01-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-12-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-11-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-10-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-09-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-08-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-07-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-06-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-05-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-04-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-03-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-02-29",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2020-01-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-12-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-11-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-10-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-09-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-08-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-07-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-06-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-05-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-04-30",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-03-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-02-28",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2019-01-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
    {
      storeId: 4,
      date: "2018-12-31",
      expences: {
        rent: 32000,
        utility: 20000,
        insurance: 2000,
        interest: 6000,
      },
    },
  ];

  const getAllExpenceDataForAllStores = () => expenceData;

  const getAllExpenceDataByStoreId = (storeId) => expenceData.filter(report => report.storeId === storeId)

  const getMonthlyExpenceDataForAllStores = (month, year) =>
    expenceData.filter(
      (report) =>
        parseInt(report.date.slice(0, 4)) === year &&
        parseInt(report.date.slice(5, 8)) === month
    );

  const getMonthlyExpenceDataByStoreId = (storeId, month, year) =>
    expenceData.filter(
      (report) =>
        parseInt(report.date.slice(0, 4)) === year &&
        parseInt(report.date.slice(5, 8)) === month &&
        report.storeId === storeId
    );
  
  const getYearlyExpenceDataForAllStores = (year) =>
    expenceData.filter((report) => parseInt(report.date.slice(0, 4)) === year);

  const getYearlyExpenceDataByStoreId = (storeId, year) =>
    expenceData.filter((report) => parseInt(report.date.slice(0, 4)) === year && report.storeId === storeId);

  return { getAllExpenceDataForAllStores, getAllExpenceDataByStoreId, getMonthlyExpenceDataForAllStores, getMonthlyExpenceDataByStoreId, getYearlyExpenceDataForAllStores, getYearlyExpenceDataByStoreId };
})();

export default FinancialDataModule;
