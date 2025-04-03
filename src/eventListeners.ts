import { fetchDiscs } from "./api.js";
import { Disc } from "../src/types/disc";

export function setupEventListeners(): void {
    document.addEventListener('DOMContentLoaded', async () => {
        const discs = await fetchDiscs();
        const list = document.getElementById('disc-list');

        if(list) {
            list.innerHTML = '';
            discs.forEach((disc: Disc) => {
                const li = document.createElement('li');
                li.textContent = `${disc.title} || ${disc.type} || ${disc.id}`;
                list.appendChild(li);
            });
        }
    });
}