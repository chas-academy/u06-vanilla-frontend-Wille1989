
import { Disc } from "../src/types/disc";
import { Manufacturer } from "./types/manufacturer";

import { showAddDiscForm } from "./forms/createDisc.js";

import { fetchManufacturer } from "./api/fetchManufacturer.js";
import { fetchDiscs } from "./api/fetchDiscs.js";


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

        li.textContent = `${disc.title} || type: ${disc.type} || fade: ${disc.fade} || turn: ${disc.turn} || glide: ${disc.glide} || speed: ${disc.speed}`;

        list.appendChild(li);
    });
}


export function showAllManufacturer(): void {
    
        fetchManufacturer().then((manufacturers) => {

            const mList = document.getElementById('manufacturer-list');

            if(mList) {
                mList.innerHTML = '';
    
                manufacturers.forEach((manufacturer: Manufacturer) => {
                    const mLi = document.createElement('li');
    
                    mLi.textContent = `name: ${manufacturer.name} || country: ${manufacturer.country}`;
    
                    mList.appendChild(mLi);
                });
            }
        });      
}


// KNAPP FÖR ATT TA ANVÄNDAREN TILL ATT SKAPA EN NY DISC

export function setupAddDiscButton(): void {
    const addDiscBtn = document.getElementById('add-disc-btn');

    if(addDiscBtn) {
        addDiscBtn.addEventListener('click', () => {
            showAddDiscForm();
        });
    }
}
