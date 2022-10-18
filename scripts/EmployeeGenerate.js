import EmployeeModule from "./modules/EmployeeDataModule.js";
import EmployeeDataModule from "./modules/EmployeeDataModule.js";

const employeSection = document.querySelector("#employe-section");

const btnShowAll = document.querySelector("#showAllBtn");
const btnKarlJohan = document.querySelector("#KarlJohanBtn");
const btnAkerBrygge = document.querySelector("#AkerBryggeBtn");
const btnBispevika = document.querySelector("#BispevikaBtn");
const btnMajorstuen = document.querySelector("#MajorstuenBtn");

let employeTxt = "";
let employeeData = EmployeeDataModule.getAllEmployees();

const showAll = () => {
  let employeeArray = [];
  employeeData.forEach((employee) => {
    employeeArray.push(employee);
  });
  printEmployee(employeeArray);
};

const showLocation = (location) => {
  let employeeArray = [];
  employeeData.forEach((employee) => {
    if (employee.location.includes(location)) employeeArray.push(employee);
  });
  printEmployee(employeeArray);
};

const printEmployee = (array) => {
  {
    let employeTxt = "";
    array.forEach((employee) => {
      employeTxt += `
      <div class="column is-3">
      <section class="employee-card-container">
        <div class="card has-text-centered">
            <div class="edit-menu">
              <i class="fas edit-button fa-chevron-circle-down"></i>
              <div class="edit-menu-content">
              <a onclick="alert('Edit Employee')" ">Edit</a>
              <a onclick="alert('Employee Deleted')"">Delete</a>
              </div>
            </div>
              <img src="https://thispersondoesnotexist.com/image" class="profile-img">
              <h1><b> ${employee.name}</b></h3>
              <h2>${employee.position}</h2>
              <div class="info-line"><i class="card-icon fas fa-birthday-cake"></i><span>${
                employee.birthdate
              }</span></div>
              <div class="info-line"><i class="card-icon fas fa-dollar-sign"></i><span> ${employee.salary.toLocaleString(
                "no-NO"
              )} Kr</span></div>
              <div class="info-line"><i class="card-icon fas fa-phone-alt"></i><span>${
                employee.phone
              }</span></div>
              <div class="info-line"><i class="card-icon fas fa-map-marker-alt"></i><span>${
                employee.location
              }</span></div>
        </div>
      </section>  
    </div>
`;
      employeSection.innerHTML = employeTxt;
    });
  }
};

btnShowAll.onclick = () => showAll();
btnKarlJohan.onclick = () => showLocation("Karl Johan");
btnAkerBrygge.onclick = () => showLocation("Aker Brygge");
btnBispevika.onclick = () => showLocation("Bispevika");
btnMajorstuen.onclick = () => showLocation("Majorstuen");

employeSection.innerHTML = employeTxt;
showAll();
