var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getDiscsById } from "../api/fetch/fetchSpecifikDisc.js";
import { getManufacturer } from "../api/fetch/fetchSpecifikManufacturer.js";
import { showUpdateManufacturerForm } from "./updateManufacturer.js";
import { showUpdateDiscForm } from "./updateDisc.js";
import { showForm } from "../ui/formvisibility.js";
export function initUpdateManufacturerForm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const manufacturer = yield getManufacturer(id);
            yield showUpdateManufacturerForm(manufacturer);
            showForm('form-section-update-manufacturer');
            console.log("Initierar uppdateringsformulär med ID:", id);
        }
        catch (error) {
            console.error('Kunde inte initera uppdateringsformuläret:', error);
        }
    });
}
export function initUpdateDiscForm(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const disc = yield getDiscsById(id);
            yield showUpdateDiscForm(disc);
            showForm('form-section-update-disc');
            console.log("Initierar uppdateringsformulär med ID:", id);
        }
        catch (error) {
            console.error('Kunde inte initiera Uppdateringsformuläret för Disc:', error);
        }
    });
}
