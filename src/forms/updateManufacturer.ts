import { updateManufacturer } from "../api/update/updateManufacturer.js";
import { Manufacturer } from "../types/manufacturer.js";
import { showAllManufacturer } from "../api/show/manufacturers.js";
import { deleteManufacturerAndDiscs } from "../api/delete/deleteManufacturerAndDisc.js";
import { showHome } from "../ui/formvisibility.js";


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

        showAllManufacturer();
    });

    const deleteBtnManufacturer = document.getElementById('delete-manufacturer-btn')!;
    deleteBtnManufacturer?.addEventListener('click', async () => {
        const confirmDelete = confirm('Bekräfta borttagningen av Tillverkare och tillhörande discar!');
        if(!confirmDelete) return;

        await deleteManufacturerAndDiscs(manufacturer._id);

        form.reset();
        showHome();
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 'form-cancel-btn';
    cancelBtn.textContent = 'Tillbaka';

    cancelBtn.addEventListener('click', () => {
        showHome();
    });
    
    form.appendChild(cancelBtn);
}