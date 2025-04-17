var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchDiscs } from "../fetch/fetchDiscs.js";
import { initUpdateDiscForm } from "../../forms/initUpdateForm.js";
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
            initUpdateDiscForm(disc._id);
        });
        li.appendChild(editBtnDisc);
        list.appendChild(li);
    });
}
