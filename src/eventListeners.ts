import { fetchDiscs, fetchManufacturer } from "./api.js";
import { Disc } from "../src/types/disc";
import { Manufacturer } from "./types/manufacturer";

export function showAllDiscs(): void {
    document.addEventListener('DOMContentLoaded', async () => {
        const searchInput = document.getElementById('search') as HTMLInputElement;
        const list = document.getElementById('disc-list');

        if(!list) return;
        
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

        li.textContent = `${disc.title} || type: ${disc.type} || fade: ${disc.fade} || turn: ${disc.turn} || glide: ${disc.glide} || speed: ${disc.speed}`;

        list.appendChild(li);
    });
}


export function showAllManufacturer(): void {
    document.addEventListener('DOMContentLoaded', async () => {
        const manfucaturers = await fetchManufacturer();
        const mList = document.getElementById('manufacturer-list');

        if(mList) {
            mList.innerHTML = '';

            manfucaturers.forEach((manufacturer: Manufacturer) => {
                const mLi = document.createElement('li');

                mLi.textContent = `name: ${manufacturer.name} || country: ${manufacturer.country}`;

                mList.appendChild(mLi);
            });
        }
    });
}