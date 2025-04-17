import { Disc } from "../../types/disc.js";

import { fetchDiscs } from "../fetch/fetchDiscs.js";
import { initUpdateDiscForm } from "../../forms/initUpdateForm.js";


export async function showAllDiscs(): Promise<void> {
        const searchInput = document.getElementById('search') as HTMLInputElement;
        const list = document.getElementById('disc-list');

        if(!searchInput || !list) return;
        
        const allDiscs = await fetchDiscs();
        updateDiscList(allDiscs, list);

        searchInput.addEventListener('input', async () => {
            const term = searchInput.value.trim();

        if(term === '') {
            updateDiscList(allDiscs, list);
        } else {
            const filteredResult = await fetchDiscs(term);
            updateDiscList(filteredResult, list)
        }
    });
}

function updateDiscList(discs: Disc[], list: HTMLElement){
    list.innerHTML = '';

    if(discs.length === 0) {
        list.innerHTML = '<li>Inga träffar på sökningen</li>';
        return;
    }

    discs.forEach(disc => {
        const li = document.createElement('li');

        // Skapa en container för disc-info
    li.innerHTML = `
      <div class="disc-info">
          <strong>${disc.title}</strong>
          <span>Type: ${disc.type}</span>
          <span>Speed: ${disc.speed}, Glide: ${disc.glide}, Turn: ${disc.turn}, Fade: ${disc.fade}</span>
      </div>
      `;

        const editBtnDisc = document.createElement('button');
        editBtnDisc.textContent = "Redigera";
        editBtnDisc.addEventListener('click', () => {
            initUpdateDiscForm(disc._id)
        });

        li.appendChild(editBtnDisc);
        list.appendChild(li);
    });
}