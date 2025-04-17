import { Disc } from "../../types/disc.js";
import { showMessage } from "../../ui/ui.js";

export async function updateDisc(id: string, updatedDisc: Partial<Disc>): Promise <void> {
    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/discs/update/${id}`, {
            method: 'PATCH',
            headers: { 
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(updatedDisc)
        });

        if(!response.ok) {
            throw new Error ("Misslyckades med att uppdatera disc!");
        }
        showMessage('Discen uppdaterades!', 'success');
    } catch(error) {
        showMessage('Discen gick inte att uppdatera, försök igen', 'error');
        console.error('Fel vid uppdatering', error);
    }
}