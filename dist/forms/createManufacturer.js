var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createManufacturer } from "../api/createManufacturer.js";
export function showAddManufacturerForm() {
    const container = document.getElementById('form-container-add-manufacturer');
    if (!container)
        return;
    container.innerHTML = `
    <form id="add-manufacturer-form">

        <label for="name">Tillverkarens namn:</label>
        <input type="text" id="name" name="name" required>

        <label for="name">Tillverkarens land:</label>
        <input type="text" id="country" name="country" required>

        <button type="submit">Skapa tillverkare</button>

    </form>
    `;
    const form = document.getElementById('add-manufacturer-form');
    form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const country = document.getElementById('country').value;
        yield createManufacturer(name, country);
        form.reset();
    }));
}
