const EmployeeModule = (function () {
  const employees = [
    //Aker Brygge
    {
      name: "Per Johansen",
      position: "Manager",
      fulltime: true,
      birthdate: "05-10-1979",
      salary: 800000,
      phone: "92578456",
      location: "Aker Brygge",
    },
    {
      name: "Bjørn Olsen",
      position: "Chef",
      fulltime: true,
      birthdate: "13-10-1970",
      salary: 530000,
      phone: "98162470",
      location: "Aker Brygge",
    },
    {
      name: "Mange Mortensson",
      position: "Waiter",
      fulltime: false,
      birthdate: "19-03-1985",
      salary: 430000,
      phone: "983123674",
      location: "Aker Brygge",
    },
    {
      name: "Emanuel Qvarnstrom",
      position: "Waiter",
      fulltime: false,
      birthdate: "22-10-1991",
      salary: 430000,
      phone: "98032054",
      location: "Aker Brygge",
    },
    {
      name: "Maiken Schumacher",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Aker Brygge",
    },
    //Bispevika
    {
      name: "Jan Hansen",
      position: "Manager",
      fulltime: true,
      birthdate: "19-05-1989",
      salary: 800000,
      phone: "98745655",
      location: "Bispevika",
    },
    {
      name: "Paulina Andresen",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Bispevika",
    },
    {
      name: "Jason Wang",
      position: "Chef",
      fulltime: true,
      birthdate: "19-05-1989",
      salary: 530000,
      phone: "98745655",
      location: "Bispevika",
    },
    {
      name: "Mats Davidsson",
      position: "Waiter",
      fulltime: false,
      birthdate: "24-12-1985",
      salary: 430000,
      phone: "98032054",
      location: "Bispevika",
    },
    {
      name: "Justin Smith",
      position: "Waiter",
      fulltime: false,
      birthdate: "23-11-1995",
      salary: 430000,
      phone: "98062314",
      location: "Bispevika",
    },
    {
      name: "Lando Norris",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Bispevika",
    },
    {
      name: "Haaland Haaland",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Bispevika",
    },
    {
      name: "Cecilie Solberg",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Bispevika",
    },
    {
      name: "Elise Holtbakk",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Bispevika",
    },
    //Majorstuen
    {
      name: "Ole Larsen",
      position: "Manager",
      fulltime: true,
      birthdate: "04-03-1988",
      salary: 800000,
      phone: "98569420",
      location: "Majorstuen",
    },
    {
      name: "Lars Andersen",
      position: "Chef",
      fulltime: true,
      birthdate: "21-06-1993",
      salary: 530000,
      phone: "92569964",
      location: "Majorstuen",
    },
    {
      name: "Anders Andersson",
      position: "Waiter",
      fulltime: false,
      birthdate: "01-01-2000",
      salary: 430000,
      phone: "98062054",
      location: "Majorstuen",
    },
    {
      name: "Mohammed Taqa",
      position: "Waiter",
      fulltime: false,
      birthdate: "12-12-1997",
      salary: 430000,
      phone: "98435625",
      location: "Majorstuen",
    },
    {
      name: "Mona Høgmo",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Majorstuen",
    },
    {
      name: "Andrea Holtbakk",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Majorstuen",
    },
    //Karl Johan
    {
      name: "Kjell Pedersen",
      position: "Manager",
      fulltime: true,
      birthdate: "21-06-1993",
      salary: 800000,
      phone: "92578945",
      location: "Karl Johan",
    },
    {
      name: "Elise Holtbakk",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Karl Johan",
    },
    {
      name: "Knut Nilsen",
      position: "Chef",
      fulltime: true,
      birthdate: "21-06-1993",
      salary: 530000,
      phone: "97286428",
      location: "Karl Johan",
    },
    {
      name: "Olav Kaupang",
      position: "Waiter",
      fulltime: false,
      birthdate: "07-06-1998",
      salary: 430000,
      phone: "98568670",
      location: "Karl Johan",
    },
    {
      name: "Simen Gavril",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Karl Johan",
    },
    {
      name: "Oda Andersen",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Karl Johan",
    },
    {
      name: "Trine Jenner",
      position: "Waiter",
      fulltime: false,
      birthdate: "15-11-1998",
      salary: 430000,
      phone: "41399785",
      location: "Karl Johan",
    },
  ];

  // if (fulltime) return fulltimeWorker;

  /*
Ansatte:
navn
alder
stilling
lønn
Stillingsprosent
status
Telefon
Arbeidssted
Adresse
..
*/

  const getAllEmployees = () => employees;

  return { getAllEmployees };
})();

export default EmployeeModule;
