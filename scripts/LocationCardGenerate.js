import LocationDataModule from "./modules/LocationDataModule.js";

const locationCardSection = document.querySelector("#location-card-section");
const locationData = LocationDataModule.getAllLocations();
let card = "";

locationData.forEach((l) => {
  card += `
    <section class="column location-card-container">
        <div class="card">
            <section class="card-image">
                <img src="images/${l.image}">
                <h2>${l.name}</h2>
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <i class="menu fas fa-chevron-circle-down"></i>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a href="#" class="dropdown-item">
                        Edit
                      </a>
                      <a class="dropdown-item">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <p><i class="fas fa-map-marker-alt"></i>  ${l.address}</p>
                <p><i class="fas fa-phone"></i>${l.telephone}</p>
                <p><i class="far fa-envelope-open"></i>${l.email}</p>
                <p><i class="fas fa-chair"></i>${l.tableCount}</p>
        </div>
    </section>
    `;
});

locationCardSection.innerHTML = card;
