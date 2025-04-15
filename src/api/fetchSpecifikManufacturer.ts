import { Manufacturer } from "../types/manufacturer.js";

export async function getManufacturer(id: string): Promise<Manufacturer> {

    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/manufacturer/show/${id}`);

        if(!response.ok) {
            throw new Error('Kunde inte hämta tillverkare');
        }

        const result = await response.json();
        console.log("API-Svar", result);

        const manufacturer: Manufacturer = result.data;
        return manufacturer;
    } catch (error) {
        console.error('fel vid hämtning av tillverkare', error);
        throw error;
    }
}