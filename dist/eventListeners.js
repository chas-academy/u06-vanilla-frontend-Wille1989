var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchDiscs } from "./api.js";
export function setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => __awaiter(this, void 0, void 0, function* () {
        const discs = yield fetchDiscs();
        const list = document.getElementById('disc-list');
        if (list) {
            list.innerHTML = '';
            discs.forEach((disc) => {
                const li = document.createElement('li');
                li.textContent = `${disc.title} || ${disc.type}`;
                list.appendChild(li);
            });
        }
    }));
}
