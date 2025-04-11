
import { Disc } from "../types/disc";

const showResult = document.getElementById('search-result');

export function displayResults(discs: Disc[]) {

    if (!showResult) return;

    showResult.innerHTML = '';

    if (discs.length === 0) {
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