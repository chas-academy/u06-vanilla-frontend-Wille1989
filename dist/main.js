import { showAllDiscs, showAllManufacturer } from "./eventListeners.js";
import { showAddDiscForm } from "./forms/createDisc.js";
import { showAddManufacturerForm } from "./forms/createManufacturer.js";
document.addEventListener("DOMContentLoaded", () => {
    showAllManufacturer();
    showAllDiscs();
    showAddDiscForm();
    showAddManufacturerForm();
});
