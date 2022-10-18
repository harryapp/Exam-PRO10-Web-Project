import FinancialDataModule from "./modules/FinancialDataModule.js";
import SalesDataModule from "./modules/SalesDataModule.js";

const mainContainer = document.querySelector("#data-content");
const contentHeader = document.querySelector("#content-header");

const mainDropdownTxt = document.querySelector("#main-dropdown-txt");
const compareDropdownTxt = document.querySelector("#compare-dropdown-txt");
const mainData = document.querySelector("#main-data");
const compareData = document.querySelector("#compare-data");
const resultData = document.querySelector("#result-data");

let btnIncrementMonth = document.querySelector("#btn-increment");
let btnDecrementMonth = document.querySelector("#btn-decrement");
let btnChangeDateView = document.querySelector("#btn-change-date-view");

let btnGrossMargin = document.querySelector("#btn-gross-margin");
let btnProfitMargin = document.querySelector("#btn-profit-margin");
let btnOperatingMargin = document.querySelector("#btn-operating-margin");
let btnExpences = document.querySelector("#btn-expences");

//Drop down
const btnAllMainData = document.querySelector("#dropdown-all-main-data");
const btnAkerBryggeMainData = document.querySelector(
  "#dropdown-aker-brygge-main-data"
);
const btnBispevikaMainData = document.querySelector(
  "#dropdown-bispevika-main-data"
);
const btnMajorstuenMainData = document.querySelector(
  "#dropdown-majorstuen-main-data"
);
const btnKarlJohanMainData = document.querySelector(
  "#dropdown-karl-johan-main-data"
);

const btnAllCompareData = document.querySelector("#dropdown-all-compare-data");
const btnAkerBryggeCompareData = document.querySelector(
  "#dropdown-aker-brygge-compare-data"
);
const btnBispevikaCompareData = document.querySelector(
  "#dropdown-bispevika-compare-data"
);
const btnMajorstuenCompareData = document.querySelector(
  "#dropdown-majorstuen-compare-data"
);
const btnKarlJohanCompareData = document.querySelector(
  "#dropdown-karl-johan-compare-data"
);

const storeNames = [
  "All",
  "Aker Brygge",
  "Bispevika",
  "Majorstuen",
  "Karl Johan",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dataList = [10, 50, 90];

let isMonthlyView = true;
const taxRate = 0.25;
let selectedMonth = 1;
let selectedYear = 2020;
let selectedStoreId = 1;
let selectedCompareStoreId = 1;
let selectedMainIncomeStatement = 1;
let selectedCompareIncomeStatement = 1;

const salesData = SalesDataModule.getAllSalesDataForAllStores();
const expencesData = FinancialDataModule.getAllExpenceDataForAllStores();

const init = () => {
  btnChangeDateView.onclick = changeDateView;
  btnIncrementMonth.onclick = incrementMonth;
  btnDecrementMonth.onclick = decrementMonth;
  updateMain(selectedStoreId);
  updateCompare(selectedCompareStoreId);
};

const calculateIncomeStatement = (storeId, month, year) => {
  let salesData;
  let expencesData;
  let incomeStatementData = {
    grossSale: 0,
    costPrice: 0,
    grossMargin: 0,
    totalExpences: 0,
    incomeBeforeTax: 0,
    taxAmount: 0,
    netIncome: 0,
    rent: 0,
    utility: 0,
    insurance: 0,
    interest: 0,
  };

  if (isMonthlyView) {
    if (storeId > 0) {
      salesData = SalesDataModule.getMonthlySalesByStoreId(
        storeId,
        month,
        year
      );
      expencesData = FinancialDataModule.getMonthlyExpenceDataByStoreId(
        storeId,
        month,
        year
      );
    } else {
      salesData = SalesDataModule.getMonthlySalesDataForAllStores(month, year);
      expencesData = FinancialDataModule.getMonthlyExpenceDataForAllStores(
        month,
        year
      );
    }
  } else {
    if (storeId > 0) {
      salesData = SalesDataModule.getYearlySalesDataByStoreId(storeId, year);
      expencesData = FinancialDataModule.getYearlyExpenceDataByStoreId(
        storeId,
        year
      );
    } else {
      salesData = SalesDataModule.getYearlySalesDataForAllStores(year);
      expencesData = FinancialDataModule.getYearlyExpenceDataForAllStores(year);
    }
  }

  salesData.forEach((report) => {
    report.salesList.forEach((product) => {
      incomeStatementData.grossSale += product.salesPrice * product.quantity;
      incomeStatementData.costPrice += product.costPrice * product.quantity;
    });
  });

  expencesData.forEach((report) => {
    incomeStatementData.rent += report.expences.rent;
    incomeStatementData.utility += report.expences.utility;
    incomeStatementData.insurance += report.expences.insurance;
    incomeStatementData.interest += report.expences.interest;
  });

  incomeStatementData.grossMargin =
    incomeStatementData.grossSale - incomeStatementData.costPrice;
  incomeStatementData.totalExpences =
    incomeStatementData.rent +
    incomeStatementData.utility +
    incomeStatementData.insurance +
    incomeStatementData.interest;
  incomeStatementData.incomeBeforeTax =
    incomeStatementData.grossMargin - incomeStatementData.totalExpences;
  incomeStatementData.taxAmount = incomeStatementData.grossSale * taxRate;
  incomeStatementData.netIncome =
    incomeStatementData.incomeBeforeTax - incomeStatementData.taxAmount;

  return incomeStatementData;
};

const calculateIncomeStatementDifference = (
  incomeStatement1,
  incomeStatement2
) => {
  let differenceIncomeStatementData = {
    grossSale: incomeStatement1.grossSale - incomeStatement2.grossSale,
    costPrice: incomeStatement1.costPrice - incomeStatement2.costPrice,
    grossMargin: incomeStatement1.grossMargin - incomeStatement2.grossMargin,
    totalExpences:
      incomeStatement1.totalExpences - incomeStatement2.totalExpences,
    incomeBeforeTax:
      incomeStatement1.incomeBeforeTax - incomeStatement2.incomeBeforeTax,
    taxAmount: incomeStatement1.taxAmount - incomeStatement2.taxAmount,
    netIncome: incomeStatement1.netIncome - incomeStatement2.netIncome,
    rent: incomeStatement1.rent - incomeStatement2.rent,
    utility: incomeStatement1.utility - incomeStatement2.utility,
    insurance: incomeStatement1.insurance - incomeStatement2.insurance,
    interest: incomeStatement1.interest - incomeStatement2.interest,
    percentGrossSale:
      ((incomeStatement1.grossSale - incomeStatement2.grossSale) /
        incomeStatement2.grossSale) *
      100,
    percentCostPrice:
      ((incomeStatement1.costPrice - incomeStatement2.costPrice) /
        incomeStatement2.costPrice) *
      100,
    percentGrossMargin:
      ((incomeStatement1.grossMargin - incomeStatement2.grossMargin) /
        incomeStatement2.grossMargin) *
      100,
    percentTotalExpences:
      ((incomeStatement1.totalExpences - incomeStatement2.totalExpences) /
        incomeStatement2.totalExpences) *
      100,
    percentIncomeBeforeTax:
      ((incomeStatement1.incomeBeforeTax - incomeStatement2.incomeBeforeTax) /
        incomeStatement2.incomeBeforeTax) *
      100,
    percentTaxAmount:
      ((incomeStatement1.taxAmount - incomeStatement2.taxAmount) /
        incomeStatement2.taxAmount) *
      100,
    percentNetIncome:
      ((incomeStatement1.netIncome - incomeStatement2.netIncome) /
        incomeStatement2.netIncome) *
      100,
    percentRent:
      ((incomeStatement1.rent - incomeStatement2.rent) /
        incomeStatement2.rent) *
      100,
    percentUtility:
      ((incomeStatement1.utility - incomeStatement2.utility) /
        incomeStatement2.utility) *
      100,
    percentInsurance:
      ((incomeStatement1.insurance - incomeStatement2.insurance) /
        incomeStatement2.insurance) *
      100,
    percentInterest:
      ((incomeStatement1.interest - incomeStatement2.interest) /
        incomeStatement2.interest) *
      100,
  };
  return differenceIncomeStatementData;
};

const generateIncomeStatementCard = (incomeStatement) => {
  let incomeStamentTxt = `
    <div class="card">
        <section>
            <div class="data-container">
                <p><b>Sales: ${incomeStatement.grossSale.toLocaleString(
                  "no-NO"
                )} kr</b> </p>
                <p style = "text-indent: 25px;"> Cost of Goods Sold: ${incomeStatement.costPrice.toLocaleString(
                  "no-NO"
                )} kr </p>
                <p><b> Gross Margin: ${incomeStatement.grossMargin.toLocaleString(
                  "no-NO"
                )} kr</b> </p>
                <br>
                <p><b> Fixed Expences:</b></p>
                <p style = "text-indent: 25px;">Rent: ${incomeStatement.rent.toLocaleString(
                  "no-NO"
                )} kr  </p>
                <p style = "text-indent: 25px;">Utility: ${incomeStatement.utility.toLocaleString(
                  "no-NO"
                )} kr </p>
                <p style = "text-indent: 25px;">Insurance: ${incomeStatement.insurance.toLocaleString(
                  "no-NO"
                )} kr </p>
                <p style = "text-indent: 25px;">Interest: ${incomeStatement.interest.toLocaleString(
                  "no-NO"
                )} kr </p>
                <p><b>Total Fixed Expences: ${incomeStatement.totalExpences.toLocaleString(
                  "no-NO"
                )} kr</b></p>
                <br>
                <p><b>Income Before Tax: ${incomeStatement.incomeBeforeTax.toLocaleString(
                  "no-NO"
                )} kr</b></p>
                <p>Tax (${
                  taxRate * 100
                }%): ${incomeStatement.taxAmount.toLocaleString(
    "no-NO"
  )} kr </p>
                <br>
                <p><b>Net Income: ${incomeStatement.netIncome.toLocaleString(
                  "no-NO"
                )} kr</b></p>
            </div>
        </section>
    </div>
   `;

  return incomeStamentTxt;
};

const generateIncomeStatementCardDifference = (incomeStatement) => {
  let incomeStamentTxt = `
            <div class="card compare-card">
                <section>
                    <div class="data-container">
                    <p><b>Sales: ${incomeStatement.grossSale.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentGrossSale.toFixed(
    1
  )}%)</b> </p>
                    <p style = "text-indent: 25px;"> Cost of Goods Sold: ${incomeStatement.costPrice.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentCostPrice.toFixed(1)}%)</p>
                    <p><b> Gross Margin: ${incomeStatement.grossMargin.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentGrossMargin.toFixed(
    1
  )}%)</b> </p>
                    <br>
                    <p><b> Fixed Expences:</b></p>
                    <p style = "text-indent: 25px;">Rent: ${incomeStatement.rent.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentRent.toFixed(1)}%)</p>
                    <p style = "text-indent: 25px;">Utility: ${incomeStatement.utility.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentUtility.toFixed(1)}%)</p>
                    <p style = "text-indent: 25px;">Insurance: ${incomeStatement.insurance.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentInsurance.toFixed(1)}%)</p>
                    <p style = "text-indent: 25px;">Interest: ${incomeStatement.interest.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentInterest.toFixed(1)}%)</p>
                    <p><b>Total Fixed Expences: ${incomeStatement.totalExpences.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentTotalExpences.toFixed(
    1
  )}%)</b></p>
                    <br>
                    <p><b>Income Before Tax: ${incomeStatement.incomeBeforeTax.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentIncomeBeforeTax.toFixed(
    1
  )}%)</b></p>
                    <p>Tax (${
                      taxRate * 100
                    }%): ${incomeStatement.taxAmount.toLocaleString(
    "no-NO"
  )} kr (${incomeStatement.percentTaxAmount.toFixed(1)}%)</p>
                    <br>
                    <p><b>Net Income: ${incomeStatement.netIncome.toLocaleString(
                      "no-NO"
                    )} kr (${incomeStatement.percentNetIncome.toFixed(
    1
  )}%)</b></p>
                    </div>
                </section>
            </div>
   `;
  return incomeStamentTxt;
};

const updateMain = (storeId) => {
  selectedStoreId = storeId;
  selectedMainIncomeStatement = calculateIncomeStatement(
    storeId,
    selectedMonth,
    selectedYear
  );

  mainData.innerHTML = generateIncomeStatementCard(selectedMainIncomeStatement);
  mainDropdownTxt.innerHTML = storeNames[selectedStoreId];
  updateResult();
  console.log(
    (selectedMainIncomeStatement.netIncome /
      selectedMainIncomeStatement.grossSale) *
      100
  );
  let res1 =
    (selectedMainIncomeStatement.netIncome /
      selectedMainIncomeStatement.grossSale) *
    100;
  dataList = [res1.toFixed(1), 50, 90];
};

const updateCompare = (storeId) => {
  selectedCompareIncomeStatement = calculateIncomeStatement(
    storeId,
    selectedMonth,
    selectedYear
  );
  selectedCompareStoreId = storeId;

  // compareData.innerHTML = generateIncomeStatementCard(selectedCompareIncomeStatement)
  compareDropdownTxt.innerHTML = storeNames[selectedCompareStoreId];
  updateResult();
};

const updateResult = () => {
  let result = calculateIncomeStatementDifference(
    selectedMainIncomeStatement,
    selectedCompareIncomeStatement
  );
  // resultData.innerHTML = generateIncomeStatementCardDifference(result)
  compareData.innerHTML = generateIncomeStatementCardDifference(result);

  if (isMonthlyView) {
    contentHeader.innerHTML = `Monthly Report for ${
      monthNames[selectedMonth - 1]
    } ${selectedYear}`;
  } else {
    contentHeader.innerHTML = `Annual Report for ${selectedYear}`;
  }
};

const incrementMonth = () => {
  if (isMonthlyView === true) {
    if (selectedMonth === 12) {
      selectedMonth = 1;
      selectedYear += 1;
    } else {
      selectedMonth += 1;
    }
  } else {
    selectedYear += 1;
  }
  updateMain(selectedStoreId);
  updateCompare(selectedCompareStoreId);
};

const decrementMonth = () => {
  if (isMonthlyView === true) {
    if (selectedMonth === 1) {
      selectedMonth = 12;
      selectedYear -= 1;
    } else {
      selectedMonth -= 1;
    }
  } else {
    selectedYear -= 1;
  }
  updateMain(selectedStoreId);
  updateCompare(selectedCompareStoreId);
};

const changeDateView = () => {
  if (!isMonthlyView) {
    isMonthlyView = true;
    updateMain(selectedStoreId);
    updateCompare(selectedCompareStoreId);

    btnChangeDateView.innerHTML = "Change To Annual View";
  } else {
    isMonthlyView = false;
    updateMain(selectedStoreId);
    updateCompare(selectedCompareStoreId);

    btnChangeDateView.innerHTML = "Change To Monthly View";
  }
};

btnAllMainData.onclick = () => updateMain(0);
btnAkerBryggeMainData.onclick = () => updateMain(1);
btnBispevikaMainData.onclick = () => updateMain(2);
btnMajorstuenMainData.onclick = () => updateMain(3);
btnKarlJohanMainData.onclick = () => updateMain(4);

btnAllCompareData.onclick = () => updateCompare(0);
btnAkerBryggeCompareData.onclick = () => updateCompare(1);
btnBispevikaCompareData.onclick = () => updateCompare(2);
btnMajorstuenCompareData.onclick = () => updateCompare(3);
btnKarlJohanCompareData.onclick = () => updateCompare(4);

init();

const generateCharts = () => {
  let id;
  for (let i = 0; i < dataList.length; i++) {
    id = `#chart-${i}`;
    var options2 = {
      chart: {
        foreColor: "#FFFFFF",
        height: 280,
        type: "radialBar",
      },
      series: [dataList[i]],
      colors: ["#F2726F"],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#4d5866",
            startAngle: -90,
            endAngle: 90,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          gradientToColors: ["#62B58F"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "butt",
      },
      labels: ["Progress"],
    };

    new ApexCharts(document.querySelector(id), options2).render();
  }
};

const generateLineChart = () => {
  let netIncomeData = [];
  let grossSaleData = [];
  let totalExpencesData = [];

  monthNames.forEach((month) =>
    netIncomeData.push(
      calculateIncomeStatement(
        selectedStoreId,
        monthNames.indexOf(month) + 1,
        selectedYear
      ).netIncome
    )
  );
  monthNames.forEach((month) =>
    grossSaleData.push(
      calculateIncomeStatement(
        selectedStoreId,
        monthNames.indexOf(month) + 1,
        selectedYear
      ).grossSale
    )
  );
  monthNames.forEach((month) =>
    totalExpencesData.push(
      calculateIncomeStatement(
        selectedStoreId,
        monthNames.indexOf(month) + 1,
        selectedYear
      ).totalExpences
    )
  );

  var options = {
    series: [
      {
        name: "Net Income",
        data: netIncomeData,
      },
      {
        name: "Gross sale",
        data: grossSaleData,
      },
      {
        name: "Expences",
        data: totalExpencesData,
      },
    ],
    chart: {
      foreColor: "#FFFFFF",
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Result",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#455467"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: monthNames,
    },
  };

  var chart = new ApexCharts(document.querySelector("#line-chart"), options);
  chart.render();
};

generateCharts();
generateLineChart();
