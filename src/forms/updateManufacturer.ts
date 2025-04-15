import { updateManufacturer } from "../api/updateManufacturer.js";
import { Manufacturer } from "../types/manufacturer.js";
import { showAllManufacturer } from "../eventListeners.js";
import { deleteManufacturerAndDiscs } from "../api/deleteManufacturerAndDisc.js";


export async function showUpdateManufacturerForm(manufacturer: Manufacturer): Promise<void> {
    const container = document.getElementById('form-container-update-manufacturer');

    if(!container) return;

    container.innerHTML = `
    <form id="update-manufacturer-form">

        <label for="name">Tillverkarens namn:</label>
        <input type="text" id="update-name" name="name" value="${manufacturer.name}" required>

        <label for="country">Tillverkarens land:</label>
        <input type="text" id="update-country" name="country" value="${manufacturer.country}" required>

        <button type="submit">Uppdatera tillverkare</button>
        <button type="button" id="delete-manufacturer-btn">Ta bort tillverkare</button>

    </form>
    `;

    const form = document.getElementById('update-manufacturer-form') as HTMLFormElement;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = (document.getElementById('update-name') as HTMLInputElement).value;
        const country = (document.getElementById('update-country') as HTMLInputElement).value;

        await updateManufacturer(manufacturer._id, { name, country });
        alert('Tillverkare uppdaterades!');

        showAllManufacturer();
    });

    const deleteBtnManufacturer = document.getElementById('delete-manufacturer-btn')!;
    deleteBtnManufacturer?.addEventListener('click', async () => {
        const confirmDelete = confirm('Bekräfta borttagningen av Tillverkare och tillhörande discar!');
        if(!confirmDelete) return;

        await deleteManufacturerAndDiscs(manufacturer._id);
        alert('Tillverkaren borttagen!');

        showAllManufacturer();
    });
}