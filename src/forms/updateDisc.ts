import { Disc } from "../types/disc.js";
import { updateDisc } from "../api/updateDisc.js";
import { showAllDiscs } from "../eventListeners.js";
import { deleteDisc } from "../api/deleteDisc.js";

export function showUpdateDiscForm(disc: Disc) {
    const container = document.getElementById('form-container-update-disc')!;

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

  const form = document.getElementById('update-disc-form') as HTMLFormElement;
  form.addEventListener('submit', async (e) => {
  e.preventDefault();

    const updatedDisc = {
      title: (document.getElementById('update-title') as HTMLInputElement).value,
      type: (document.getElementById('update-type') as HTMLSelectElement).value as Disc["type"],
      speed: parseInt((document.getElementById('update-speed') as HTMLInputElement).value),
      turn: parseInt((document.getElementById('update-turn') as HTMLInputElement).value),
      glide: parseInt((document.getElementById('update-glide') as HTMLInputElement).value),
      fade: parseInt((document.getElementById('update-fade') as HTMLInputElement).value),
    };

    await updateDisc(disc._id, updatedDisc);

    alert("Disc Uppdaterades!");

    showAllDiscs();
  });

  const deleteBtnDisc = document.getElementById('delete-disc-btn')!;
  deleteBtnDisc.addEventListener('click', async () => {
    const confirmDelete = confirm('Vänligen bekräfta borttagningen');
    if(!confirmDelete) return;

    await deleteDisc(disc._id);
    alert("Disc Borttagen!");

    showAllDiscs();
  });

}