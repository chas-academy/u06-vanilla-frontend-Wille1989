import { Manufacturer } from "../../types/manufacturer.js";
import { showMessage } from "../../ui/ui.js";


export async function fetchManufacturer(): Promise<Manufacturer[]> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/manufacturer/index');
        
        const data = await response.json();

        console.log('Tillverkare hämtade!', data)
        return data.data as Manufacturer[];
    } catch (error) {
        
        showMessage('Det gick inte att hämta alla tillverkare', 'error');
        console.error('Couldnt get the manufacturers', error);
        return [];
    }
}
