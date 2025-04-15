import { Disc } from "../types/disc.js";

export async function getDiscsById(id: string): Promise<Disc> {

    try {
        const response = await fetch(`https://u05-wbsp.onrender.com/api/discs/show/${id}`)

        if(!response.ok) {
            throw new Error('Kunde inte hämta disc!');
        }

        const result = await response.json();
        const disc: Disc = result.data;
        return disc;

    } catch (error) {
        console.error('fel vid hämtning av tillverkare', error)
        throw error;
    }
}