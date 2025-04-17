var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { updateManufacturer } from "../api/update/updateManufacturer.js";
import { showAllManufacturer } from "../api/show/manufacturers.js";
import { deleteManufacturerAndDiscs } from "../api/delete/deleteManufacturerAndDisc.js";
import { showHome } from "../ui/formvisibility.js";
export function showUpdateManufacturerForm(manufacturer) {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.getElementById('form-container-update-manufacturer');
        if (!container)
            return;
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
        const form = document.getElementById('update-manufacturer-form');
        form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const name = document.getElementById('update-name').value;
            const country = document.getElementById('update-country').value;
            yield updateManufacturer(manufacturer._id, { name, country });
            showAllManufacturer();
        }));
        const deleteBtnManufacturer = document.getElementById('delete-manufacturer-btn');
        deleteBtnManufacturer === null || deleteBtnManufacturer === void 0 ? void 0 : deleteBtnManufacturer.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const confirmDelete = confirm('Bekräfta borttagningen av Tillverkare och tillhörande discar!');
            if (!confirmDelete)
                return;
            yield deleteManufacturerAndDiscs(manufacturer._id);
            form.reset();
            showHome();
        }));
        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.className = 'form-cancel-btn';
        cancelBtn.textContent = 'Tillbaka';
        cancelBtn.addEventListener('click', () => {
            showHome();
        });
        form.appendChild(cancelBtn);
    });
}
