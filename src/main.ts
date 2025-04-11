import { showAllDiscs, showAllManufacturer } from "./eventListeners.js";
import { showAddDiscForm } from "./forms/createDisc.js";

document.addEventListener("DOMContentLoaded", () => {
    showAllDiscs();
    showAllManufacturer();
    showAddDiscForm();
  });