import { showMessage } from "../../ui/ui.js";

export async function deleteManufacturerAndDiscs(id: string): Promise<void> {

    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/manufacturer/delete/${id}`, {
            method: 'DELETE'
        });

        if(!response.ok) {
            throw new Error("Misslyckades med att ta bort tillverkare, försök igen");
        }

        showMessage('Tillverkare och tillhörande discar nu borttagna!', 'success');
    } catch (error) {
        
        showMessage('Borttagning gick inte att utföra, försök igen senare', 'error');
        console.error('Fel vid borttagningav tillverkare', error);
    }
}