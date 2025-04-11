var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showAddDiscForm } from "./forms/createDisc.js";
import { fetchManufacturer } from "./api/fetchManufacturer.js";
import { fetchDiscs } from "./api/fetchDiscs.js";
export function showAllDiscs() {
    return __awaiter(this, void 0, void 0, function* () {
        const searchInput = document.getElementById('search');
        const list = document.getElementById('disc-list');
        if (!searchInput || !list)
            return;
        const allDiscs = yield fetchDiscs();
        updateDiscList(allDiscs, list);
        searchInput.addEventListener('input', () => __awaiter(this, void 0, void 0, function* () {
            const term = searchInput.value.trim();
            if (term === '') {
                updateDiscList(allDiscs, list);
            }
            else {
                const filteredResult = yield fetchDiscs(term);
                updateDiscList(filteredResult, list);
            }
        }));
    });
}
function updateDiscList(discs, list) {
    list.innerHTML = '';
    if (discs.length === 0) {
        list.innerHTML = '<li>Inga träffar på sökningen</li>';
        return;
    }
    discs.forEach(disc => {
        const li = document.createElement('li');
        li.textContent = `${disc.title} || type: ${disc.type} || fade: ${disc.fade} || turn: ${disc.turn} || glide: ${disc.glide} || speed: ${disc.speed}`;
        list.appendChild(li);
    });
}
export function showAllManufacturer() {
    fetchManufacturer().then((manufacturers) => {
        const mList = document.getElementById('manufacturer-list');
        if (mList) {
            mList.innerHTML = '';
            manufacturers.forEach((manufacturer) => {
                const mLi = document.createElement('li');
                mLi.textContent = `name: ${manufacturer.name} || country: ${manufacturer.country}`;
                mList.appendChild(mLi);
            });
        }
    });
}
// KNAPP FÖR ATT TA ANVÄNDAREN TILL ATT SKAPA EN NY DISC
export function setupAddDiscButton() {
    const addDiscBtn = document.getElementById('add-disc-btn');
    if (addDiscBtn) {
        addDiscBtn.addEventListener('click', () => {
            showAddDiscForm();
        });
    }
}
