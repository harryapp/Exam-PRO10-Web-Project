const modal = document.querySelector(".modal");
const showModalButton = document.querySelector("#show-modal-button");
const submitButton = document.querySelector(".submit-button");
const hideModalButton = document.querySelector(".hide-modal-button");
const modalBackground = document.querySelector(".modal-background");

showModalButton.addEventListener("click", () => {
  modal.classList.add("is-active");
});

hideModalButton.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

submitButton.addEventListener("click", () => {
  modal.classList.remove("is-active");
});