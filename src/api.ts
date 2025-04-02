import { Disc } from "../src/types/disc";

export async function fetchDiscs(): Promise<Disc[]> {

    try {
        const response = await fetch('https://u05-wbsp.onrender.com/api/discs/index');
        const data = await response.json();
        console.log(data);
        return data.data as Disc[];
    } catch (error) {
        console.error('Couldnt get the discs', error);
        return [];
    }
}