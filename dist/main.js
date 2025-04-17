import { showAllManufacturer } from "./api/show/manufacturers.js";
import { showAllDiscs } from "./api/show/discs.js";
import { showHome } from "./ui/formvisibility.js";
import { setupManufacturerHomeSection, setupDiscHomeSection } from "./styling/formhandler.js";
import { setupSearchHover } from "./styling/search.js";
import { hooverDropDown } from "./styling/dropdownwrapper.js";
import "./ui/navigationbar.js";
document.addEventListener("DOMContentLoaded", () => {
    showHome();
    showAllManufacturer();
    showAllDiscs();
    /* STYLING */
    setupSearchHover();
    setupManufacturerHomeSection();
    setupDiscHomeSection();
    hooverDropDown();
});
