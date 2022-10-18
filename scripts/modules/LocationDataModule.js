const LocationDataModule = (function () {
  const locations = [
    {
      name: "Aker Brygge",
      address: "Stranden 30, 0250, Oslo",
      image: "/aker-brygge.jpg",
      telephone: "22 22 55 55",
      email: "akerbrygge@gyldnepizza.no",
      bar: true,
      tableCount: "55",
      outdoorSeating: true,
    },
    {
      name: "Bispevika",
      address: "Operagata 59, 0191, Oslo",
      image: "/bispevika.jpg",
      telephone: "22 22 55 55",
      email: "bispevika@gyldnepizza.no",
      bar: true,
      tableCount: "30",
      outdoorSeating: true,
    },
    {
      name: "Karl Johan",
      address: "Karl Johans gate 37, 0162, Oslo",
      image: "/karl-johan.jpg",
      telephone: "22 22 55 55",
      email: "karljohan@gyldnepizza.no",
      bar: true,
      tableCount: "43",
      outdoorSeating: true,
    },
    {
      name: "Majorstuen",
      address: "Valkyriegata 9, 0366, Oslo",
      image: "/majorstuen.jpg",
      telephone: "22 22 55 55",
      email: "majorstuen@gyldnepizza.no",
      bar: true,
      tableCount: "35",
      outdoorSeating: false,
    },
  ];

  const getAllLocations = () => locations;

  return { getAllLocations };
})();

export default LocationDataModule;
