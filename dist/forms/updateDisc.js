var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { updateDisc } from "../api/update/updateDisc.js";
import { deleteDisc } from "../api/delete/deleteDisc.js";
import { showHome } from "../ui/formvisibility.js";
export function showUpdateDiscForm(disc) {
    const container = document.getElementById('form-container-update-disc');
    container.innerHTML = `
      <form id="update-disc-form">

      <label for="title">Titel:</label>
      <input type="text" id="update-title" value="${disc.title}" required />

      <label for="update-type">Typ:</label>
      <select id="update-type" required>
          <option value="Driver" ${disc.type === "Driver" ? "selected" : ""}>Driver</option>
          <option value="Distance Driver" ${disc.type === "Distance Driver" ? "selected" : ""}>Distance Driver</option>
          <option value="Mid-Range" ${disc.type === "Mid-Range" ? "selected" : ""}>Mid-Range</option>
          <option value="Putter" ${disc.type === "Putter" ? "selected" : ""}>Putter</option>
      </select>

      <label for="speed">Speed:</label>
      <input type="number" id="update-speed" value="${disc.speed}" required />

      <label for="turn">Turn:</label>
      <input type="number" id="update-turn" value="${disc.turn}" required />

      <label for="glide">Glide:</label>
      <input type="number" id="update-glide" value="${disc.glide}" required />

      <label for="fade">Fade:</label>
      <input type="number" id="update-fade" value="${disc.fade}" required />

      <button type="submit">Uppdatera Disc</button>
      <button type="button" id="delete-disc-btn">Ta bort Disc</button>
    </form>
  `;
    const form = document.getElementById('update-disc-form');
    form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const updatedDisc = {
            title: document.getElementById('update-title').value,
            type: document.getElementById('update-type').value,
            speed: parseInt(document.getElementById('update-speed').value),
            turn: parseInt(document.getElementById('update-turn').value),
            glide: parseInt(document.getElementById('update-glide').value),
            fade: parseInt(document.getElementById('update-fade').value),
        };
        yield updateDisc(disc._id, updatedDisc);
        showHome();
    }));
    const deleteBtnDisc = document.getElementById('delete-disc-btn');
    deleteBtnDisc.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
        const confirmDelete = confirm('Vänligen bekräfta borttagningen');
        if (!confirmDelete)
            return;
        yield deleteDisc(disc._id);
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
}
