import { Disc } from "../src/types/disc";
import { Manufacturer } from "./types/manufacturer";

export async function fetchDiscs(searchTerm: string = ''): Promise<Disc[]> {

    try {

        const url = searchTerm
        ? `https://u05-wbsp.onrender.com/api/discs/index?search=${encodeURIComponent(searchTerm)}`
        : `https://u05-wbsp.onrender.com/api/discs/index`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.data as Disc[];
    } catch (error) {
        console.error('Couldnt get the discs', error);
        return [];
    }
}

export async function fetchManufacturer(): Promise<Manufacturer[]> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/manufacturer/index');
        const data = await response.json();
        console.log(data);
        return data.data as Manufacturer[];
    } catch (error) {
        console.error('Couldnt get the manufacturers', error);
        return [];
    }
}


const showResult = document.getElementById('search-result');

export function displayResults(discs: Disc[]) {

    if(!showResult) return;

    showResult.innerHTML = '';

    if(discs.length === 0) {
        showResult.innerHTML = '<p>Inga träffar på sökningen</p>';
        return;
    }

    const ul = document.createElement('ul');
    discs.forEach(disc => {
        const li = document.createElement('li');
        li.textContent = `${disc.title} (${disc.manufacturer.name})`;
        ul.appendChild(li);
    });

    showResult.appendChild(ul);
}