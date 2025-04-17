import { showMessage } from "../../ui/ui.js";

export async function deleteDisc(id: string): Promise<void> {

    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/discs/delete/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error("misslyckades att ta bort disc, försök igen");
        }

        showMessage('Discen togs bort!', 'success');
    } catch (error) {
        showMessage('Discen kunde inte tas bort, försök igen senare', 'error');
        console.error('Fel vid borttagning av disc:', error);
    }
}