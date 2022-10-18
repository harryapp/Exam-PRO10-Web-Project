import SalesDataModule from "./modules/SalesDataModule.js";

//HTML elements
const dayDropdownContent = document.querySelector("#day-dropdown-content");
const dropdownYear = document.querySelectorAll(".dropdown-year");
const dropdownMonth = document.querySelectorAll(".dropdown-month");
let dropdownDay = []; //Gets populated when generating dayDropdown
const dropdownStoreID = document.querySelectorAll(".dropdown-storeID");
const yearSearchDisplay = document.querySelector("#year-search-display");
const monthSearchDisplay = document.querySelector("#month-search-display");
const daySearchDisplay = document.querySelector("#day-search-display");
const storeIDsearchDisplay = document.querySelector("#storeID-search-display");

// Variables
let contentArray = [];
let dateArray = [];
let selectedYear = 2020;
let selectedMonth = 1;
let selectedDay = 1;
let storeID = 1;

function generateData(storeID, day, month, year) {
  contentArray = [];
  SalesDataModule.getDailySalesByStoreId(storeID, day, month, year).forEach((element) => {
    contentArray.push(element);
  });
}
generateData(1, 1, 1, 2020);

const generateSeries = () => {
  let seriesArray = [];
  contentArray[0].salesList.forEach((element) => {
    seriesArray.push({
      name: element.name,
      data: genereateSalesData(element.name, "grossRevenue"),
    });
  });
  console.log(seriesArray);
  return seriesArray;
};

const genereateProductNameArray = () => {
  let nameArray = [];
  contentArray[0].salesList.forEach((element) => {
    nameArray.push(element.name);
  });
  console.log(nameArray);
  return nameArray;
};

const genereatePieSeries = (salesData) => {
  let seriesArray = [];
  genereateProductNameArray().forEach((element) => {
    seriesArray.push(...genereateSalesData(element, salesData));
  });
  console.log(seriesArray);
  return seriesArray;
};

const generateDateArray = () => (dateArray = contentArray.map((element) => element.date));
generateDateArray();

//Generating sales data
const genereateSalesData = (name, type) => {
  let quantityArray = [];
  contentArray.forEach((element) => {
    element.salesList.forEach((product) => {
      if (product.name === name)
        switch (type) {
          case "quantity":
            quantityArray.push(product.quantity);
            break;
          case "salesPrice":
            quantityArray.push(product.salesPrice);
            break;
          case "costPrice":
            quantityArray.push(product.costPrice);
            break;
          case "grossRevenue":
            let grossRevenue = product.quantity * product.salesPrice;
            quantityArray.push(grossRevenue);
            break;
          //options.yaxis.title.text = "Gross Revenue"
          case "grossMargin":
            let grossMargnin = product.quantity * (product.salesPrice - product.costPrice);
            console.log(grossMargnin);
            quantityArray.push(grossMargnin);
            break;
        }
    });
  });
  return quantityArray;
};

//Rendering charts
let options = {
  series: generateSeries(),
  chart: {
    type: "bar",
    height: 350,
    foreColor: "#FFFFFF", // if darkmode = true => forecolor = #FFFFFF, Lightmode = true => #000000
    background: "#464f5b",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "95%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["transparent"],
  },
  xaxis: {
    categories: dateArray,
  },
  yaxis: {
    title: {
      text: "Gross Revenue",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return `Gross Revenue: ${val}`;
      },
    },
  },
};

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

let optionsPieChartOne = {
  series: genereatePieSeries("quantity"),
  chart: {
    width: 380,
    type: "pie",
    foreColor: "#FFFFFF",
  },
  labels: genereateProductNameArray(),
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

let pieChartOne = new ApexCharts(document.querySelector("#pie-chart-one"), optionsPieChartOne);
pieChartOne.render();

let optionsPieChartTwo = {
  series: genereatePieSeries("grossMargin"),
  chart: {
    width: 380,
    type: "pie",
    foreColor: "#FFFFFF",
  },
  labels: genereateProductNameArray(),
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

let pieChartTwo = new ApexCharts(document.querySelector("#pie-chart-two"), optionsPieChartTwo);
pieChartTwo.render();

//Update charts functions
function updateChart() {
  generateData(storeID, selectedDay, selectedMonth, selectedYear);
  generateDateArray();
  chart.updateSeries(generateSeries());
  chart.updateOptions({
    xaxis: {
      categories: dateArray,
    },
  });
}

function updatePieCharts() {
  generateData(storeID, selectedDay, selectedMonth, selectedYear);
  pieChartOne.updateSeries(genereatePieSeries("quantity"));
  pieChartTwo.updateSeries(genereatePieSeries("grossMargin"));
}

//Events
dropdownYear.forEach((element) =>
  element.addEventListener("click", () => {
    yearSearchDisplay.innerHTML = element.getAttribute("value");
    selectedYear = parseInt(element.getAttribute("value"));
    updateChart();
    updatePieCharts();
  })
);

dropdownMonth.forEach((element) =>
  element.addEventListener("click", () => {
    monthSearchDisplay.innerHTML = element.innerHTML;
    selectedMonth = parseInt(element.getAttribute("value"));
    updateChart();
    updatePieCharts();
  })
);

dropdownStoreID.forEach((element) =>
  element.addEventListener("click", () => {
    storeIDsearchDisplay.innerHTML = element.getAttribute("value");
    storeID = parseInt(element.getAttribute("value"));
    updateChart();
    updatePieCharts();
  })
);

//Generating day dropdown, need to be a bit more compicated, number of days = variable
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
function generateDayDropdown() {
  const days = daysInMonth(selectedMonth, selectedYear);
  let htmlTxt;
  htmlTxt = "";
  for (let i = 1; i <= days; i++) {
    htmlTxt += `<a value="${i}" class="dropdown-item dropdown-day">${i}</a>`;
  }
  dayDropdownContent.innerHTML = htmlTxt;
  dropdownDay = document.querySelectorAll(".dropdown-day");

  // Eventlistener on day droppdown
  dropdownDay.forEach((element) =>
    element.addEventListener("click", () => {
      daySearchDisplay.innerHTML = element.getAttribute("value");
      selectedDay = parseInt(element.getAttribute("value"));
      updateChart();
      updatePieCharts();
    })
  );
}
generateDayDropdown(selectedMonth, selectedYear);
