import { createManufacturer } from "../api/createManufacturer.js";

export function showAddManufacturerForm () {
    const container = document.getElementById('form-container-add-manufacturer');

    if(!container) return;

    container.innerHTML = `
    <form id="add-manufacturer-form">

        <label for="name">Tillverkarens namn:</label>
        <input type="text" id="name" name="name" required>

        <label for="name">Tillverkarens land:</label>
        <input type="text" id="country" name="country" required>

        <button type="submit">Skapa tillverkare</button>

    </form>
    `;

    const form = document.getElementById('add-manufacturer-form') as HTMLFormElement;
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const country = (document.getElementById('country') as HTMLInputElement).value;

        await createManufacturer(name, country);
        form.reset();
    });
}