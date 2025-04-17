import { Disc } from "../../types/disc";


export async function fetchDiscs(searchTerm: string = ''): Promise<Disc[]> {

    try {

        const url = searchTerm
            ? `https://u05-wbsp.onrender.com/api/discs/index?search=${encodeURIComponent(searchTerm)}`
            : `https://u05-wbsp.onrender.com/api/discs/index`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data.data as Disc[];
    } catch (error) {
        console.error('Couldnt get the discs', error);
        return [];
    }
}
