import { Disc } from "../types/disc";

export function showUpdateDiscForm(disc: Disc) {
    const container = document.getElementById('form-container')!;

    container.innerHTML = `
    <h2>Uppdatera disc</h2>
    <form id="update-disc-form">
      <input type="text" id="title" value="${disc.title}" required/>
      <input type="text" id="title" value="${disc.title}" required/>
      <input type="text" id="title" value="${disc.title}" required/>
      <input type="number" id="speed" value="${disc.speed}" required/>
      <!-- osv för turn, fade, glide, type... -->
      <button type="submit">Spara ändringar</button>
    </form>
  `;

}