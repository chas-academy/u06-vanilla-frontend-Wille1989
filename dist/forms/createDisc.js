var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchManufacturer } from "../api/fetchManufacturer.js";
export function showAddDiscForm() {
    return __awaiter(this, void 0, void 0, function* () {
        const formContainer = document.getElementById('form-container');
        const button = document.getElementById('add-disc-btn');
        if (!formContainer)
            return;
        formContainer.innerHTML =
            `<h2>Lägg till ny disc </h2>
                <form id = "add-disc-form" >
                    
                    <label for="manufacturer">Tillverkare</label>
                    <select id="manufacturer" name="manufacturer" required>
                        <option value="" disabled selected>Välj tillverkare</option> 


                    <label for= "title" > Titel: </label>
                    <input type = "text" id = "title" name = "title" required >

                    <label for="type">Typ:</label>
                    <select id="type" name="type" required>
                        <option value="Distance Driver">Distance Driver</option>
                        <option value="Driver">Driver</option>
                        <option value="Mid-Range">Mid-Range</option>
                        <option value="Putter">Putter</option>
                    </select>

                    <label for= "speed"> Speed: </label>
                    <input type = "number" id = "speed" name = "speed" required>

                    <label for= "turn"> turn: </label>
                    <input type = "number" id = "turn" name = "turn" required>

                    <label for= "fade"> fade: </label>
                    <input type = "number" id = "fade" name = "fade" required>

                    <label for= "glide"> glide: </label>
                    <input type = "number" id = "glide" name = "glide" required>

                    <button type="submit"> Spara disc </button>
                </form>`;
        const form = document.getElementById('add-disc-form');
        const manufacturerSelect = document.getElementById('manufacturer');
        const manufacturers = yield fetchManufacturer();
        manufacturers.forEach((manufacturer) => {
            const option = document.createElement('option');
            option.value = manufacturer._id;
            option.textContent = manufacturer.name;
            manufacturerSelect.appendChild(option);
        });
        form.addEventListener('submit', (event) => __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const newDisc = {
                title: document.getElementById('title').value,
                type: document.getElementById('type').value,
                speed: parseInt(document.getElementById('speed').value),
                turn: parseInt(document.getElementById('turn').value),
                fade: parseInt(document.getElementById('fade').value),
                glide: parseInt(document.getElementById('glide').value),
                manufacturer: document.getElementById('manufacturer').value,
            };
            const response = yield fetch('https://u05-wbsp.onrender.com/api/discs/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDisc)
            });
            if (response.ok) {
                console.log("Disc skapades!");
                form.reset();
            }
            else {
                console.error("Misslyckades att skapa disc");
            }
        }));
    });
}
;
