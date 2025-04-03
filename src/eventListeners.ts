import { fetchDiscs, fetchManufacturer } from "./api.js";
import { Disc } from "../src/types/disc";
import { Manufacturer } from "./types/manufacturer";

export function setupEventListeners(): void {
    document.addEventListener('DOMContentLoaded', async () => {
        const discs = await fetchDiscs();
        const list = document.getElementById('disc-list');

        if(list) {
            list.innerHTML = '';

            discs.forEach((disc: Disc) => {
                const li = document.createElement('li');

                li.textContent = `${disc.title} || type: ${disc.type} || fade: ${disc.fade} || turn: ${disc.turn} || glide: ${disc.glide} || speed: ${disc.speed}`;

                list.appendChild(li);
            });
        }
    });
}

export function setupEventListeners2(): void {
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