import { showAddDiscForm } from "../forms/createDisc.js";
import { showAddManufacturerForm } from "../forms/createManufacturer.js";

const selectElement = document.getElementById('create-select') as HTMLSelectElement;

selectElement.addEventListener('change', () => {
    const selected = selectElement.value;

    if(selected === 'manufacturer') {
        showAddManufacturerForm();
    }

    if(selected === 'disc') {
        showAddDiscForm();
    }

    selectElement.selectedIndex = 0;
});