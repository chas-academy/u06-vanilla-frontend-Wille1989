import { Manufacturer } from "../../types/manufacturer.js";
import { showMessage } from "../../ui/ui.js";

export async function createManufacturer(name: string, country: string): Promise<Manufacturer |null> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/manufacturer/create', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, country })
        });

        const data = await response.json();

       showMessage('Ny tillverkare skapad i systemet!', 'success');
        return data.data;
    } catch (error) {

        showMessage('Något gick fel, försök att skapa en tillverkare igen', 'error');
        console.error("Misslyckade att skapa tillverkare!", error);
        return null;
    }
}