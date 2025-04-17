import { Manufacturer } from "../../types/manufacturer.js";
import { showMessage } from "../../ui/ui.js";

export async function updateManufacturer(id: string, updatedManufacturer: Partial<Manufacturer>): Promise<void> {
    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/manufacturer/update/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedManufacturer)
        });

        if(!response.ok) {
            throw new Error('Misslyckades med att uppdatera tillverkare, prova igen');
        }

        showMessage('Tillverkaren uppdaterades!', 'success');

    } catch(error) {
        
        showMessage('Tillverkaren gick inte att uppdatera, försök igen', 'error');
        console.error('Fel vid uppdatering av tillverkare', error);
    }
}