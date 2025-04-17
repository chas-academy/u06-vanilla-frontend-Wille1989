var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showMessage } from "../../ui/ui.js";
export function updateManufacturer(id, updatedManufacturer) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://u05-wbsp.onrender.com/api/manufacturer/update/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedManufacturer)
            });
            if (!response.ok) {
                throw new Error('Misslyckades med att uppdatera tillverkare, prova igen');
            }
            showMessage('Tillverkaren uppdaterades!', 'success');
        }
        catch (error) {
            showMessage('Tillverkaren gick inte att uppdatera, försök igen', 'error');
            console.error('Fel vid uppdatering av tillverkare', error);
        }
    });
}
